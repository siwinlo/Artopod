const router = require("express").Router();

router.get("/", async (req, res, next) => {
  try {
    const exhibitions = await exhibitions.findAll();
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
