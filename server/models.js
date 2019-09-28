const Sequelize = require("sequelize");
const db = require("./db");

//Model definitions
const Exhibitions = db.define("exhibition", {
  title: {
    type: Sequelize.TEXT,
    defaultValue: "untitled"
  },
  description: Sequelize.TEXT,
  artforumID: Sequelize.INTEGER,
  showStart: Sequelize.DATE,
  showEnd: Sequelize.DATE,
  imgUrl: Sequelize.STRING,
  imgCaption: Sequelize.TEXT,
  gallery: Sequelize.STRING,
  galleryDescription: Sequelize.TEXT,
  address: Sequelize.STRING,
  city: Sequelize.STRING,
  zip: Sequelize.STRING,
  lng: Sequelize.FLOAT,
  lat: Sequelize.FLOAT,
  hours: Sequelize.STRING,
  galleryURL: Sequelize.STRING,
  galleryEmail: Sequelize.STRING,
  phone: Sequelize.STRING
});

module.exports = Exhibitions;
