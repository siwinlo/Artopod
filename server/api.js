const router = require("express").Router();
const Exhibitions = require("./models");

// Gets all exhibitions
router.get("/", async (req, res, next) => {
  try {
    const exhibitions = await Exhibitions.findAll();
    res.json(exhibitions);
  } catch (err) {
    next(err);
  }
});

router.use((req, res, next) => {
  const err = new Error("API route cannot be found");
  err.status = 404;
  next(err);
});

module.exports = router;
