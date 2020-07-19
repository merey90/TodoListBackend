import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  login: {
    type: String,
    required: true,
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
});

export const UserModel = mongoose.model('User', userSchema);
