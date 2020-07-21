import dotenv from 'dotenv';

// Set the env file
const configs = dotenv.config({ path: '/.env' });

if (configs.error) {
  throw configs.error;
}
