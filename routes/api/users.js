require("dotenv").config();
const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/userscontroller");
const inviteController = require("../../controllers/invitecontroller");
const userProfilesController = require("../../controllers/userprofilescontroller");
const authController = require("../../controllers/authcontroller");
const bcrypt = require("bcryptjs");
const passport = require("passport");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const authToken = require("../../config/authToken");
const rateLimit = require('express-rate-limit');

// simple login rate limiter: 5 attempts per 15 minutes per IP
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5,
  message: { error: 'Too many login attempts, please try again after 15 minutes' },
  standardHeaders: true,
  legacyHeaders: false,
});

// User model
const User = require("../../models/user");
const Invite = require("../../models/invite");
// const Auth = require("../../models/auth");

// Passport middleware
router.use(passport.initialize());
router.use(passport.session());
require("../../config/auth")(passport);

// Login
router.post('/login', loginLimiter, (req, res, next) => {
  passport.authenticate('local', async (err, user) => {
    if (err) return next(err);
    if (!user) return res.send('No User Exists');
    req.logIn(user, async (err) => {
      if (err) return next(err);
      const payload = { user: { id: user.id } };
      jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, async (err, token) => {
        if (err) {
          console.log(err);
        }
        const userObj = { token: token, user: payload.user.id };
        res.json(userObj);
        try {
          // set auth bool true
          await require('../../models').Auth.update({ bool: true }, { where: { userId: payload.user.id } });
        } catch (e) {
          // ignore
        }
      });
    });
  })(req, res, next);
});

//Logout route
router.post('/logout', async (req, res, next) => {
  try {
    const user = req.body.user.replace(/['"]+/g, '');
    await require('../../models').Auth.update({ bool: false }, { where: { userId: user } });
    res.send('OK');
  } catch (err) {
    next(err);
  }
});

// Register
router.post('/register', async (req, res, next) => {
  try {
    const invite = await Invite.findOne({ where: { email: req.body.email } });
    if (!invite) return res.send("You haven't been invited");
    const existing = await User.findOne({ where: { email: req.body.email } });
    if (existing) return res.send('Already exists');
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create({ email: req.body.email, password: hashedPassword });
    res.send('Success');
    // create auth row
    const created = await require('../../models').Auth.create({ userId: newUser.id, bool: false });
  } catch (err) {
    next(err);
  }
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

//get users (not used)
router.route("/users", authToken).get(usersController.findAll);

module.exports = router;
