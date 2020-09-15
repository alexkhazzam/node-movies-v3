const express = require('express');
const router = express.Router();

const movieController = require('../controllers/MovieController');

router
  .route('/:id')
  .get(movieController.getMovie)
  .delete(movieController.deleteMovie);

router.route('/').post(movieController.addMovie).get(movieController.getMovies);

module.exports = router;
