const db = require('./connect');

const createCommentsTable = async () => {
  try {
    await db.query(`CREATE TABLE IF NOT EXISTS comments (
                    id serial PRIMARY KEY, 
                    comment VARCHAR (1000) NOT NULL,
                    ip VARCHAR (20) NULL,
                    created_on timestamp with time zone NOT NULL,
                    status INTEGER NOT NULL DEFAULT 1
                    )`);
    console.log('Comments table migrated');
    // await db.end();
  } catch (error) {
    console.log(error);
  }
};

const dropCommentsTable = async () => {
  try {
    await db.query('DROP TABLE IF EXISTS comments');
    console.log('Comments table dropped');
    // await db.end();
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createCommentsTable,
  dropCommentsTable,
};

require('make-runnable/custom')({
  printOutputFrame: false,
});
