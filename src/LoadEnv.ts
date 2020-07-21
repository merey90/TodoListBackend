import dotenv from 'dotenv';

if (process.env.NODE_ENV !== 'production') {
  // Set the env file
  const configs = dotenv.config({ path: '/.env' });

  if (configs.error) {
    throw configs.error;
  }
}
