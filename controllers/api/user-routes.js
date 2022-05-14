const { User } = require("../../models");
const withAuth = require("../../utils/auth");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const allUsers = await User.findAll({
      attributes: { exclude: ["password"] },
    });
    res.json(allUsers);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((loggedInUser) => {
    if (!loggedInUser) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }
    const validPassword = loggedInUser.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: "incorrect password" });
    }

    req.session.save(() => {
      req.session.user_id = loggedInUser.id;
      req.session.username = loggedInUser.username;
      req.session.loggedIn = true;
    });
    res.json({ user: loggedInUser, message: "logged in" });
  });
});

module.exports = router;
