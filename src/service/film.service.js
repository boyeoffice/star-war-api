const swapi = require('swapi-node');

const url = 'https://swapi.dev/api';

exports.listFilms = async () => {
  const { results } = await swapi.get(`${url}/films/`);
  const movies = [];
  results.forEach((item) => {
    movies.push({
      title: item.title,
      episode_id: item.episode_id,
      opening_crawl: item.opening_crawl,
      director: item.director,
      producer: item.producer,
      release_date: item.release_date,
    });
  });

  const count = movies.length;

  // sort movies from earliest to newest release date
  movies.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
  const data = {
    count,
    movies,
  };
  return data;
};

exports.listcharacters = async (params) => {
  // eslint-disable-next-line camelcase
  const { column, search_query } = params;
  const { results } = await swapi.get(`${url}/people`, { params });
  let count;
  let people = [];
  // 1 feet is equal to 30.48
  results.forEach((item) => {
    people.push({
      name: item.name,
      height: item.height,
      height_in_feet: parseFloat(item.height / 30.48).toFixed(2),
      mass: item.mass,
      skin_color: item.skin_color,
      eye_color: item.eye_color,
      birth_year: item.birth_year,
      gender: item.gender,
    });
  });

  count = people.length;

  // eslint-disable-next-line camelcase
  if (column && search_query) {
    // eslint-disable-next-line camelcase
    people = people.filter((item) => item[column] === search_query);
    count = people.length;

    if (column === 'height') {
      // descending order
      people.sort((a, b) => parseFloat(b.height) - parseFloat(a.height));
    }
  }

  const data = {
    count,
    people,
  };

  return data;
};
