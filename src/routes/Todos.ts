import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';

import { TaskModel } from '../daos/Task';
import { UserModel } from '@daos/User';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const todos = await TaskModel.find({});
  res.status(OK).json({ todos });
});

router.post('/:userId', async (req: Request, res: Response) => {
  const { userId } = req.params as ParamsDictionary;
  const todoTask = await TaskModel.create({
    title: req.body.title,
    user: userId,
  });
  await todoTask.save();

  const user = await UserModel.findById(userId);
  user?.todos.push(todoTask.id);
  await user?.save();
  return res.status(CREATED).send({ taskId: todoTask.id });
});

router.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params as ParamsDictionary;
  await TaskModel.findByIdAndUpdate(id, { done: req.body.done });
  res.status(OK).send({ taskId: id });
});

router.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params as ParamsDictionary;
  await TaskModel.findByIdAndDelete(id);
  res.status(OK).send({ taskId: id });
});

export default router;
