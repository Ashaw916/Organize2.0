const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passportLocal = require("passport-local").Strategy;
const passport = require("passport");
const cors = require("cors");
const bodyParser = require("body-parser");
// User model
const User = require("../../models/User");

// Login Page
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

// Register Page
router.post("/register", (req, res) => {
  console.log("hit reg");
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Already Exists");
    if (!doc) {
      console.log("hit reg post");
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    }
  });
});
// // Register
// router.post("/register", (req, res) => {
//   console.log("hit register post");
//   const { name, email, password, password2 } = req.body;
//   let errors = [];

//   if (!name || !email || !password || !password2) {
//     errors.push({ msg: "Please enter all fields" });
//   }

//   if (password != password2) {
//     errors.push({ msg: "Passwords do not match" });
//   }

//   if (password.length < 6) {
//     errors.push({ msg: "Password must be at least 6 characters" });
//   }

//   if (errors.length > 0) {
//     res.render("register", {
//       errors,
//       name,
//       email,
//       password,
//       password2,
//     });
//   } else {
//     User.findOne({ email: email }).then((user) => {
//       if (user) {
//         errors.push({ msg: "Email already exists" });
//         res.render("register", {
//           errors,
//           name,
//           email,
//           password,
//           password2,
//         });
//       } else {
//         const newUser = new User({
//           name,
//           email,
//           password,
//         });

//         bcrypt.genSalt(10, (err, salt) => {
//           bcrypt.hash(newUser.password, salt, (err, hash) => {
//             if (err) throw err;
//             newUser.password = hash;
//             newUser
//               .save()
//               .then((user) => {
//                 req.flash(
//                   "success_msg",
//                   "You are now registered and can log in"
//                 );
//                 res.redirect("/users/login");
//               })
//               .catch((err) => console.log(err));
//           });
//         });
//       }
//     });
//   }
// });

// // Login
// router.post("/login", (req, res, next) => {
//   passport.authenticate("local", {
//     successRedirect: "/dashboard",
//     failureRedirect: "/users/login",
//     failureFlash: true,
//   })(req, res, next);
// });

// // Logout
// router.get("/logout", (req, res) => {
//   req.logout();
//   req.flash("success_msg", "You are logged out");
//   res.redirect("/users/login");
// });
router.get("/user", (req, res) => {
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});
module.exports = router;
