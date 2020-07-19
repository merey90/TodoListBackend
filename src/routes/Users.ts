import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';

import { UserModel } from '@daos/User';

// Init shared
const router = Router();

/******************************************************************************
 *                      Get All Users - "GET /api/users/all"
 ******************************************************************************/

router.get('/', async (req: Request, res: Response) => {
  UserModel.find({}, (err, users) => {
    if (err) {
      return res.status(BAD_REQUEST).json({
        error: err,
      });
    }
    return res.status(OK).json({ users });
  });
});

/******************************************************************************
 *                       Add One - "POST /api/users/add"
 ******************************************************************************/

router.post('/', async (req: Request, res: Response) => {
  const { login, password, name, surname } = req.body;
  try {
    const newUser = new UserModel({
      login,
      password,
      name,
      surname,
    });
    await newUser.save();
    return res.status(CREATED).send({ userId: newUser.id });
  } catch (err) {
    return res.status(BAD_REQUEST).json({
      error: err,
    });
  }
});

export default router;
