const Sequelize = require("sequelize");
const { Exhibitions } = require("./models");
const axios = require("axios");
const router = require("express").Router();

//variables
let numOfPages = 0;

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
  try {
    let allExhibitions = {};
    for (let i = 0; i < 7; i++) {
      // change to numOfPages
      const res = await axios.get(
        `https://www.artforum.com/api/guide/entities-by-place-location/new-york?category=all&page=${i}&size=1&fetchAll=0`
      );
      const exh = res.data;
      const exhData = exh._embedded.location[0];
      const exhibition = {
        title: exhData.title,
        description: exhData.description,
        artforumURL: exhData.path,
        artforumID: exhData.id,
        showStart: exhData.showStart,
        showEnd: exhData.showEnd,
        imgUrl: exhData.images[0].path,
        imgCaption: exhData.images[0].captionFormatted,
        //gallery info
        gallery: exhData.location.name,
        galleryDescription: exhData.location.description,
        address: exhData.location.address,
        city: exhData.location.town,
        zip: exhData.location.zip,
        longitude: exhData.location.longitude,
        latitude: exhData.location.latitude,
        hours: exhData.location.hours,
        galleryURL: exhData.location.url,
        galleryEmail: exhData.location.email,
        phone: exhData.location.phone,
        galleryImgPath: exhData.location.primaryImage.path
      };
      allExhibitions[i] = await exhibition;
    }
    const returnExhibitions = await allExhibitions;
    console.log(returnExhibitions);
  } catch (err) {
    console.log("There was an error finding or creating that exhibition", err);
  }
}

//WHY CAN I PRINT THIS BUT NOT SAVE IT TO A VARIABLE

getAllExhibitions();
module.exports = getAllExhibitions;
