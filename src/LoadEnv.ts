import dotenv from 'dotenv';

// Set the env file
const configs = dotenv.config({ path: __dirname + '/.env' });

if (configs.error) {
  throw configs.error;
}
