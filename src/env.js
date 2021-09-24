const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  database_url: process.env.DB_URL,
  port: process.env.PORT || 5000,
  environment: process.env.NODE_ENV,
  app_name: process.env.APP_NAME,
};
