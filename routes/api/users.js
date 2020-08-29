const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passportLocal = require("passport-local").Strategy;
const passport = require("passport");
const cors = require("cors");
const bodyParser = require("body-parser");
// User model
const User = require("../../models/User");

// Passport middleware
router.use(passport.initialize());
router.use(passport.session());
require("../../config/auth")(passport);

// Login
router.post("/login", (req, res, next) => {
  console.log("hit login");
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log("hit login post");
      });
    }
  })(req, res, next);
});

// Register
router.post("/register", (req, res) => {
  console.log("hit reg");
  User.findOne({ email: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      console.log("hit reg post");
      console.log(req.body.username);
      const newUser = new User({
        email: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("Success");
    }
  });
});

//get users
router.get("/users", (req, res) => {
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});
module.exports = router;
