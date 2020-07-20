import { Schema, model } from 'mongoose';
import { ITask } from '@entities/Task';

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

export const TaskModel = model<ITask>('Task', taskSchema);
