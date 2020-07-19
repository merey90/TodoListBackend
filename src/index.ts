import './LoadEnv'; // Must be the first import
import app from '@server';
import logger from '@shared/Logger';
import mongoose from 'mongoose';

mongoose.set('useFindAndModify', false);

const port = process.env.PORT || 5000;

mongoose.connect(
  process.env.DB_CONNECT || '',
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to db!');
    app.listen(port, () =>
      console.log(`server started at http://localhost:${port}`)
    );
  }
);
