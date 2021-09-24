const { Pool } = require('pg');
// const dotenv = require('dotenv');

// dotenv.config();

const env = require('../env');

const pool = new Pool({
  connectionString: env.database_url,
});

/**
 * DB Query
 * @param {object} req
 * @param {object} res
 * @returns {object} object
 */
function query(queryText, params) {
  return new Promise((resolve, reject) => {
    pool
      .query(queryText, params)
      .then((res) => {
        resolve(res);
        // console.log(res.Result.command);
      })
      .catch((err) => {
        reject(err);
        // end();
        // console.log(err.severity);
      });
  });
}

function end() {
  return pool.end();
}

module.exports = {
  query,
  end,
};
