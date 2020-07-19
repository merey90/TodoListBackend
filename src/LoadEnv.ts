import dotenv from 'dotenv';

// Set the env file
const configs = dotenv.config();

if (configs.error) {
  throw configs.error;
}
