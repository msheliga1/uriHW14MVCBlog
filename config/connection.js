// Imports the Sequelize library - MJS 3.4.24 from Activity 14-28 mp.
const Sequelize = require('sequelize');
// Utilizes the 'dotenv' package in order to load the .env file and sets the environment variables to the process.env object.
require('dotenv').config();

console.log("Starting to set up db connection ... ");
let sequelize;
// Checks to see if the application is deployed. If JAWSDB_URL environment variable exists, then that is used. If not, it determines that you're on your local machine and utilizes the environment variables from the .env file to set up Sequelize. 
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
