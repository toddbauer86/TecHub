const { User } = require("../../models");

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

// router.post("/login", async (req, res) => {
// try {
//   const loggedInUser = await User.findOne({
//     where: {
//       email: req.body.email,
//     },
//   });
//   if (!loggedInUser) {
//     res.status(400).json({ message: "no user email found" });
//     return;
//   }

//   const validPassword = loggedInUser.checkPassword(req.body.password);
//   if (!validPassword) {
//     res.status(400).json({ message: "no user password found" });
//     return;
//   }

//   req.session.save(() => {
//     req.session.user_id = loggedInUser.id;
//     req.session.username = loggedInUser.username;
//     req.session.email = loggedInUser.email;
//     req.session.loggedIn = true;

//     res.json({ loggedInUser, message: "You are now logged in" });
//   });
// } catch (err) {
//   res.status(400).json("general fail");
// }
// });

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!user) {
      res.status(400).json({ message: "No user account found!" });
      return;
    }
    const validPassword = await user.checkPassword(req.body.password);
    if (!validPassword) {
      res.status(400).json({ message: "No user account found!" });
      return;
    }
    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;
      res.json({ user, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json({ message: "general fail" });
  }
});

module.exports = router;
