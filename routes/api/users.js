const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const cors = require("cors");
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
        res.send("Success");
        console.log("Success");
      });
    }
  })(req, res, next);
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
router.get("/", (req, res) => {
  res.send(req.users); // The req.user stores the entire user that has been authenticated inside of it.
});
module.exports = router;
