const express = require('express');
const morgan = require('morgan');

const movieRouter = require('./routes/MovieRoutes');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  console.log(`${req.url}[In the Middleware]`);
  next();
});

app.use('/api/movies', movieRouter);
app.use('/api/movies:id', movieRouter);

module.exports = app;
