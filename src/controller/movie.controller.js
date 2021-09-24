const { successParser, errorParser } = require('../helpers/parser');
const { listFilms, listcharacters } = require('../service/film.service');

exports.films = async (req, res) => {
  const { count, movies } = await listFilms();

  res.status(200).send(successParser('success', null, count, movies));
};

exports.characters = async (req, res) => {
  try {
    const params = req.query;
    const { count, people } = await listcharacters(params);

    res.status(200).send(successParser('success', null, count, people));
  } catch (error) {
    res.status(400).send(errorParser('error', 'An error occurred.', null));
  }
};
