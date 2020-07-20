import { Document, Types } from 'mongoose';

export interface IUser extends Document {
  login: string;
  password: string;
  name: string;
  surname: string;
  todos: Types.ObjectId[];
}
