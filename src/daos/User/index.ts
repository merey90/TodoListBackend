import { Schema, model } from 'mongoose';
import { IUser } from '@entities/User';

const userSchema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  todos: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Task',
    },
  ],
});

export const UserModel = model<IUser>('User', userSchema);
