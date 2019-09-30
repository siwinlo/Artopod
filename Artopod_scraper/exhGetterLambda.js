const Sequelize = require("sequelize");
const Exhibitions = require("./models");
const axios = require("axios");
const db = require("./db");

async function exhGetterLambda() {
  //variables
  let numOfPages = 0;
  let globalExhibitions = {};

  //gets first page and number of total exhibitions
  async function getFirstPage() {
    const firstPage = await axios.get(
      "https://www.artforum.com/api/guide/entities-by-place-location/new-york?category=all&page=1&size=1&fetchAll=0"
    );
    const firstPageResult = firstPage.data;
    numOfPages = firstPageResult.pages;
  }
  await getFirstPage();

  async function getAllExhibitions() {
    try {
      for (let i = 1; i < numOfPages; i++) {
        console.log(`Fetching page ${i} of ${numOfPages}`);
        const res = await axios.get(
          `https://www.artforum.com/api/guide/entities-by-place-location/new-york?category=all&page=${i}&size=1&fetchAll=0`
        );
        const exh = res.data;
        const exhData = exh._embedded.location[0];

        if (
          exhData.images[0] === undefined ||
          exhData.images === undefined ||
          exhData.location.primaryImage === undefined
        ) {
          console.log(`Exhibition at index ${i} was skipped`);
          continue;
        } else {
          const exhibition = {
            title: exhData.title || null,
            description: exhData.descriptionExtended || null,
            artforumID: exhData.id || null,
            showStart: exhData.showStart || null,
            showEnd: exhData.showEnd || null,
            imgUrl: exhData.images[0].pathLarge || null,
            imgCaption: exhData.images[0].captionFormatted || null,

            gallery: exhData.location.name || null,
            galleryDescription: exhData.location.description || null,
            address: exhData.location.address || null,
            city: exhData.location.town || null,
            zip: exhData.location.zip || null,
            lng: exhData.location.longitude || null,
            lat: exhData.location.latitude || null,
            hours: exhData.location.hours || null,
            galleryURL: exhData.location.url || null,
            galleryEmail: exhData.location.email || null,
            phone: exhData.location.phone || null
          };
          globalExhibitions[exhData.id] = exhibition;
        }
      }
      return globalExhibitions;
    } catch (err) {
      console.log(
        "There was an error finding or creating that exhibition",
        err
      );
    }
  }

  if (numOfPages > 0) {
    getAllExhibitions().then(valueObj => {
      const value = Object.values(valueObj);
      const seed = async () => {
        await db.sync({ force: true });

        // seed your database here!
        await Promise.all(
          value.map(exh => {
            console.log(
              `Inserting exh.artforumID ${exh.artforumID} into database`
            );
            return Exhibitions.create(exh);
          })
        );

        console.log("Seeding success!");
        db.close();
      };

      seed().catch(err => {
        console.error("Oh noes! Something went wrong!");
        console.error(err);
        db.close();
      });
    });
  }
}

module.exports.getter = (event, context, callback) => {
  exhGetterLambda();
};
