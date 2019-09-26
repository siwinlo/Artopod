const db = require("./db");
const { green, red } = require("chalk");
const { Exhibitions } = require("./models");
const getAllExhibitions = require("./exhibitionGetter");

const exhibitions = [];

//set exhibitions

console.log("$$$$$$$$$$$$$", exhibitions[1]);

//seed exhibitions
const seed = async () => {
  await db.sync({ force: true });

  // seed your database here!

  await Promise.all(
    exhibitions.map(exh => {
      return Exhibitions.create(exhibitions);
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
