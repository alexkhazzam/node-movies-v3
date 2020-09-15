const express = require('express');
const router = express.Router();

router.param('id', (req, res, next, val) => {
  const idObj = {
    id: `${val}`,
  };
  console.log(idObj);
  next();
});

const movieController = require('../controllers/MovieController');

router
  .route('/:id')
  .get(movieController.getMovie)
  .delete(movieController.deleteMovie);

router.route('/').post(movieController.addMovie).get(movieController.getMovies);

module.exports = router;
