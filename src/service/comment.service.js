/* eslint-disable no-useless-catch */
const db = require('../database/connect');
const randomId = require('../helpers/randomNumber');
const date = require('../helpers/date');

const id = randomId(1000000);

exports.index = async () => {
  try {
    const data = await db.query('SELECT * FROM comments ORDER BY created_on ASC LIMIT 100');
    return data;
  } catch (error) {
    throw error;
  }
};

exports.store = async (params) => {
  try {
    const { comment, ip } = params;
    const data = await db.query(`
        INSERT INTO comments (id, comment, created_on, ip) VALUES ($1, $2, $3, $4)`,
    [
      id,
      comment,
      date,
      ip,
    ]);

    return data;
  } catch (error) {
    throw error;
  }
};
