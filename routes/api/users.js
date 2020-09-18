require("dotenv").config();
const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/usersController");
const inviteController = require("../../controllers/InviteController");
const userProfilesController = require("../../controllers/userProfilesController");
const authController = require("../../controllers/authController");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const authToken = require("../../config/authToken");
// User model
const User = require("../../models/User");
const Invite = require("../../models/invite");
const Auth = require("../../models/auth");

// Passport middleware
router.use(passport.initialize());
router.use(passport.session());
require("../../config/auth")(passport);

// Login
router.post("/login", (req, res, next) => {
  console.log("hit login");
  passport.authenticate("local", (err, user) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        const payload = { user: { id: user.id } };
        jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
          console.log("payload", payload);
          console.log("token login", user);
          if (err) {
            console.log(err);
          }
          console.log(token);
          const userObj = { token: token, user: payload.user.id };
          res.json(userObj);

          console.log("payload2", payload.user.id);

          authController.update({
            user: payload.user.id,
            bool: true,
          });
          // res.send({ user: payload.user.id });
        });

        if (err) throw err;
      });
    }
  })(req, res, next);
});
// before { user: '5f5d5eee816e3051c9e1d816', bool: true }
//  before { user: undefined, bool: false }
// logout
router.post("/logout", (req, res, next) => {
  console.log("hit logout", req.body);
  const user = req.body.user.replace(/['"]+/g, "");
  console.log("logout user", user);
  // req.logout(user, (err) => {
  const payload = { user: { id: user.id } };
  console.log(payload);
  authController.update({
    user: user,
    bool: false,
  });
  // if (err) throw err;
  // })(req, res, next);
});

// Register
router.post("/register", (req, res) => {
  console.log("hit reg");
  Invite.findOne({ email: req.body.email }, async (err, doc) => {
    if (err) throw err;
    if (!doc) res.send("You haven't been invited");
    if (doc) {
      User.findOne({ email: req.body.email }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("Alredy exists");
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
          User.findOne({ email: req.body.email }, async (err, doc) => {
            if (err) throw err;
            if (doc) {
              console.log("doc", doc);
              // const hashedPassword = await bcrypt.hash(req.body.password, 10);
              // console.log("Success");
              // console.log(req.body);
              // const newUser = new User({
              //   email: req.body.email,
              //   password: hashedPassword,
              // });

              // await newUser.save();
              // res.send("Success");
              console.log("create");
              authController.create({
                user: doc._id,
                bool: false,
              });
            }
          });
        }
      });
    }
  });
});

// Invite
// post
router.post("/invites", authToken, (req, res) => {
  inviteController.findOne(req, res);
});
// get
router.get("/invites", authToken, (req, res) => {
  inviteController.findAll(req, res);
});

// Profile
// post
router.post("/profile", (req, res) => {
  console.log("profile users");
  userProfilesController.findOne(req, res);
});
// get
router.route("/profile/:id").get(userProfilesController.findOne);
router.route("/profile").get(userProfilesController.findAll);

//users
router.route("/users", authToken).get(usersController.findAll);

module.exports = router;
// module.exports = authenticateToken;
