import { Document, Types } from 'mongoose';

export interface ITask extends Document {
  title: string;
  done?: boolean;
  date?: number;
  user: Types.ObjectId;
}
