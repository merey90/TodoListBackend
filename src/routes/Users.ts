import { Request, Response, Router } from 'express';
import { CREATED, OK, BAD_REQUEST } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';

import { UserModel } from '@daos/User';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  console.log('req: ', req);
  try {
    const users = await UserModel.find({});
    res.status(OK).json(users);
  } catch (error) {
    console.log('error: ', error);
    res.status(BAD_REQUEST).json({ error });
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params as ParamsDictionary;
  const user = await UserModel.findById(id);
  res.status(OK).json(user);
});

router.get('/:id/todos', async (req: Request, res: Response) => {
  const { id } = req.params as ParamsDictionary;
  const user = await UserModel.findById(id).populate('todos');
  res.status(OK).json(user!.todos);
});

router.post('/', async (req: Request, res: Response) => {
  const { login, password, name, surname } = req.body;
  const newUser = new UserModel({
    login,
    password,
    name,
    surname,
    todos: [],
  });
  await newUser.save();
  res.status(CREATED).send({ userId: newUser.id });
});

export default router;
