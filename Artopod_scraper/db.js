const Sequelize = require("sequelize");
const RDSTokens = require("./.secrets");

const username = RDSTokens.artopodRDSUsername;
const pass = RDSTokens.artopodRDSPassword;
const host = RDSTokens.artopodRDSHost;
const port = RDSTokens.artopodRDSPort;
const database = RDSTokens.artopodRDSDatabase;

const db = new Sequelize(
  `postgres://${username}:${pass}@${host}:${port}/${database}`,
  {
    logging: false
  }
);

module.exports = db;
