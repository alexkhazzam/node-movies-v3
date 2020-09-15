const fs = require('fs');

const fetchMovies = (file) => {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', (err, data) => {
      if (err) {
        reject('Could not find file!');
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
  return promise;
};

exports.getMovie = (req, res) => {
  console.log(`[ Get Movie | id: ${req.params.id}] | ${req.requestTime}`);
  fetchMovies(`${__dirname}/../data/movies.json`)
    .then((data) => {
      const movie = data.find((movieEl) => movieEl.id === req.params.id * 1);
      res.status(200).json({
        status: 'success',
        data: {
          movie,
        },
      });
    })
    .catch((err) => {
      throw err;
    });
};

exports.deleteMovie = async (req, res) => {
  console.log(`[ Delete Movie | id: ${req.params.id}] | ${req.requestTime}`);
  try {
    const movies = await fetchMovies(`${__dirname}/../data/movies.json`);
    const deletedMov = movies.find(
      (movieEl) => movieEl.id === req.params.id * 1
    );
    fs.writeFileSync(
      `${__dirname}/../data/deletedMovies.json`,
      JSON.stringify(deletedMov)
    );

    movies.splice([req.params.id - 1], 1);
    res.status(200).json({
      status: 'success',
      data: {
        deleted: deletedMov,
        movies: movies,
      },
    });
  } catch (err) {
    throw err;
  }
};

exports.addMovie = async (req, res) => {
  console.log(`[ Add Movie ] ${req.requestTime}`);
  try {
    const movies = await fetchMovies(`${__dirname}/../data/movies.json`);
    const id = movies.length - 1;
    res.send('path under construction');
  } catch (err) {
    throw err;
  }
};

exports.getMovies = async (req, res) => {
  console.log(`[ Get Movies ] ${req.requestTime}`);
  try {
    const movies = await fetchMovies(`${__dirname}/../data/movies.json`);
    res.status(200).json({
      length: movies.length,
      status: 'success',
      data: {
        movies,
      },
    });
  } catch (err) {
    throw err;
  }
};
