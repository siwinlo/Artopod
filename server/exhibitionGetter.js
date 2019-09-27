const Sequelize = require("sequelize");
const { Exhibitions } = require("./models");
const axios = require("axios");
const router = require("express").Router();

//variables
let numOfPages = 0;
let globalExhibitions = {};

//gets first page
async function getFirstPage() {
  const firstPage = await axios.get(
    "https://www.artforum.com/api/guide/entities-by-place-location/new-york?category=all&page=1&size=1&fetchAll=0"
  );
  const firstPageResult = firstPage.data;
  numOfPages = firstPageResult.pages;
}

//gets exhibitions from artforum and puts them in our database
getFirstPage();

async function getAllExhibitions() {
  let allExhibitions = {};
  try {
    for (let i = 0; i < 250; i++) {
      // 450 is arbitrary, in production it would be numOfPages
      // change to numOfPages
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
          longitude: exhData.location.longitude || null,
          latitude: exhData.location.latitude || null,
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
    console.log("There was an error finding or creating that exhibition", err);
  }
}

getAllExhibitions().then(value => console.log(value));
module.exports = getAllExhibitions;
