import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';
import { paramMissingError } from '@shared/constants';

import { TaskModel } from '../daos/Task';

// Init shared
const router = Router();
/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/

router.get('/', async (req: Request, res: Response) => {
  TaskModel.find({}, (err, todos) => {
    if (err) {
      return res.status(BAD_REQUEST).json({
        error: err,
      });
    }
    return res.status(OK).json({ todos });
  });
});

/******************************************************************************
 *                       Add One - "POST /api/users/add"
 ******************************************************************************/

router.post('/', async (req: Request, res: Response) => {
  try {
    const todoTask = new TaskModel({
      title: req.body.title,
    });
    await todoTask.save();
    return res.status(CREATED).send({ taskId: todoTask.id });
  } catch (err) {
    return res.status(BAD_REQUEST).json({
      error: err,
    });
  }
});

/******************************************************************************
 *                       Update - "PUT /api/users/update"
 ******************************************************************************/

// router.put('/update', async (req: Request, res: Response) => {
//     const { user } = req.body;
//     if (!user) {
//         return res.status(BAD_REQUEST).json({
//             error: paramMissingError,
//         });
//     }
//     user.id = Number(user.id);
//     await userDao.update(user);
//     return res.status(OK).end();
// });

/******************************************************************************
 *                    Delete - "DELETE /api/users/delete/:id"
 ******************************************************************************/

// router.delete('/delete/:id', async (req: Request, res: Response) => {
//     const { id } = req.params as ParamsDictionary;
//     await userDao.delete(Number(id));
//     return res.status(OK).end();
// });

/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
