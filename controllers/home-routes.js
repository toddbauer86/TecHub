const router = require("express").Router();
const sequelize = require("../config/connection");

router.get("/", async (req, res) => {
  try {
    console.log("working");
    res.render("homepage");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
