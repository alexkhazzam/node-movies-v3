const fs = require('fs');

exports.getMovie = (req, res) => {
  console.log(`[ Get Movie ] ${req.requestTime}`);
  res.status(200).json({
    status: 'success',
  });
};

exports.deleteMovie = (req, res) => {
  console.log(`[ Delete Movie | id: ${req.params.id}] ${req.requestTime}`);
};

exports.addMovie = (req, res) => {
  console.log(`[ Add Movie ] ${req.requestTime}`);
};

exports.getMovies = (req, res) => {
  console.log(`[ Get Movies ] ${req.requestTime}`);
};
