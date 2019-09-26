const Sequelize = require("sequelize");
const db = require("./db");

//Model definitions
const Exhibitions = db.define("exhibition", {
  //exhibition info
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  artforumURL: Sequelize.STRING,
  artforumID: Sequelize.INTEGER,
  showStart: Sequelize.DATE,
  showEnd: Sequelize.DATE,
  imgUrl: Sequelize.STRING,
  imgCaption: Sequelize.STRING,
  //gallery info
  gallery: Sequelize.STRING,
  galleryDescription: Sequelize.TEXT,
  address: Sequelize.STRING,
  city: Sequelize.STRING,
  zip: Sequelize.STRING,
  longitude: Sequelize.FLOAT,
  latitude: Sequelize.FLOAT,
  hours: Sequelize.STRING,
  galleryURL: Sequelize.STRING,
  galleryEmail: Sequelize.STRING,
  phone: Sequelize.STRING,
  galleryImg: Sequelize.STRING
});

module.exports = Exhibitions;
