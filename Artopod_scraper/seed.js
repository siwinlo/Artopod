const Sequelize = require("sequelize");
const db = require("./db");
const { green, red } = require("chalk");
const Exhibitions = require("./models");
const getAllExhibitions = require("./exhibitionGetter");

getAllExhibitions().then(valueObj => {
  const value = Object.values(valueObj);
  const seed = async () => {
    await db.sync({ force: true });

    // seed your database here!

    await Promise.all(
      value.map(exh => {
        return Exhibitions.create(exh);
      })
    );

    console.log(green("Seeding success!"));
    db.close();
  };

  seed().catch(err => {
    console.error(red("Oh noes! Something went wrong!"));
    console.error(err);
    db.close();
  });
});
