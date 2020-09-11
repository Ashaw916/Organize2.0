require("dotenv").config();
const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/usersController");
const inviteController = require("../../controllers/InviteController");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const authToken = require("../../config/authToken");
// User model
const User = require("../../models/User");
const Invite = require("../../models/invite");

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
        // // console.log("user", { user });
        // const authHeader = req.headers["authorization"];
        // const token = authHeader && authHeader.split(" ")[1];
        // console.log(token);
        // if (token == null) return res.sendStatus(401);

        // const username = req.body.username;
        // const user = { name: username };
        const payload = { user: { id: user.id } };
        // console.log({ user });
        jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
          console.log("payload", payload);
          console.log("token login", token);
          if (err) {
            console.log(err);
          }
          res.json(token);
        });
        if (err) throw err;
      });
    }
  })(req, res, next);
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
        }
      });
    }
  });
});

// Profile
router.post("/profile", (req, res) => {
  console.log("profile");
  //look for user in collection
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
    }
  });
});

// Invite
router.post("/invites", authToken, (req, res) => {
  console.log("hit user invite");
  console.log({ email: req.body.email });
  //look for user in collection
  inviteController
    .findOne({ email: req.body.email })
    .then((dbModel) => {
      if (dbModel) res.send("Already invited");
      if (!dbModel) {
        console.log("Success");
        console.log("2", req.body);
        const newInvite = new Invite({
          email: req.body.email,
          organization: req.body.organization,
          host: req.body.host,
        });
        newInvite.save().then((dbModel) => {
          res.send("Success");
        });
      }
    })
    .catch((err) => {
      throw err;
    });
  //   async (err, doc) => {
  //     console.log(doc);
  // if (err) throw err;
  // if (doc) res.send("Already invited");
  // if (!doc) {
  //   console.log("Success");
  //   console.log("2", req.body);
  //   const newInvite = new Invite({
  //     email: req.body.email,
  //     organization: req.body.organization,
  //     host: req.body.host,
  //   });
  //   await newInvite.save();
  //   res.send("Success");
  // }
  //   }
  // );
});

//get users
// router.get("/users", authToken, (req, res) => {
//   res.send(req.users);
// });
router.route("/users", authToken).get(usersController.findAll);

module.exports = router;
// module.exports = authenticateToken;
