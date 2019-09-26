const db = require("./db");
const { Exhibitions } = require("./models");
const api = require("./apiRoutes");

const express = require("express");
const path = require("path");
//const morgan = require("morgan");

const app = express();

// logging middleware
//app.use(morgan);

// body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api", api); // include our routes!

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
}); // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error");
});

module.exports = app;
