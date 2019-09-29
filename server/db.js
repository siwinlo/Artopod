const Sequelize = require("sequelize");

const username = process.env.artopodRDSUsername;
const pass = process.env.artopodRDSPassword;
const host = process.env.artopodRDSHost;
const port = process.env.artopodRDSPort;
const database = process.env.artopodRDSDatabase;

console.log(`postgres://${username}:${pass}@${host}:${port}/${database}`);

const db = new Sequelize(
  `postgres://${username}:${pass}@${host}:${port}/${database}`,
  {
    logging: false
  }
);

module.exports = db;
