const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/usersController");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const authToken = require("../../config/authToken");
// User model
const User = require("../../models/User");

// Passport middleware
router.use(passport.initialize());
router.use(passport.session());
require("../../config/auth")(passport);

// Login
router.post("/login", (req, res) => {
  console.log("hit login");
  passport.authenticate("local", (err, user) => {
    console.log("user 1", user);
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        // console.log("user", );
        const username = req.body.username;
        const user = { name: username };
        console.log({ user });
        jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
          // console.log({ user });
          if (err) {
            console.log(err);
          }
          res.json({ token });
        });
        if (err) throw err;
      });
    }
  })(req, res);
});

// Register
router.post("/register", (req, res) => {
  console.log("hit reg");
  User.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      console.log("Success");
      console.log(req.body.email);
      const newUser = new User({
        email: req.body.email,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("Success");
    }
  });
});

//get users
// router.get("/users", authToken, (req, res) => {
//   res.send(req.users);
// });
router
  .route("/users", authToken)
  .get(usersController.findAll)
  .put(usersController.update)
  .delete(usersController.remove);

module.exports = router;
// module.exports = authenticateToken;
