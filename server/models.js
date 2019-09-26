const Sequelize = require("sequelize");
const db = require("./db");

//Model definitions
const Exhibitions = db.define("exhibition", {
  //exhibition info
  title: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  //artforumURL: Sequelize.STRING,
  artforumID: Sequelize.INTEGER,
  showStart: Sequelize.DATE,
  showEnd: Sequelize.DATE,
  imgUrl: Sequelize.STRING,
  imgCaption: Sequelize.TEXT,
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
  phone: Sequelize.STRING
});

module.exports = Exhibitions;
