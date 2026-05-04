'use strict';

const { port } = require('./config/env');
const connectDB = require('./config/db');
const app = require('./app');

async function start() {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server running on port ${port} [${process.env.NODE_ENV || 'development'}]`);
  });
}

start();
