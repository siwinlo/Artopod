const db = require("./db");
const express = require("express");
const path = require("path");
//const morgan = require("morgan");

const app = express();

// logging middleware
//app.use(morgan);
const createApp = () => {
  // body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // static middleware
  app.use(express.static(path.join(__dirname, "../public")));

  app.use("/api", require("./api")); // include our routes!

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  }); // Send index.html for any other requests

  // error handling middleware
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal server error");
  });
};

const startLisening = () => {
  const server = app.listen(8081, () =>
    console.log(`Serving it up on port 8081`)
  );
};

const syncDb = () => db.sync();

async function bootApp() {
  await syncDb();
  await createApp();
  await startLisening();
}

bootApp();

module.exports = app;
