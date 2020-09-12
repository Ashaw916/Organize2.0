// // const express = require("express");
// // const router = express.Router();
// // // User model
// // const UserProfile = require("../../models/UserProfile");

// // // Register
// // router.post("/registerProfile", (req, res) => {
// //   console.log("hit reg");
// //   User.findOne({ organization: req.body.email }, async (err, doc) => {
// //     if (err) throw err;
// //     if (doc) res.send("User Exists");
// //     if (!doc) {
// //       console.log("Success");
// //       console.log(req.body);
// //       const newUser = new UserProfile({
// //         organization: req.body.email,
// //         role: hashedPassword,
// //       });
// //       await newUser.save();
// //       res.send("Success");
// //     }
// //   });
// // //get users
// // router.get("/userprofiles", (req, res) => {
// //   res.send(req.users); // The req.user stores the entire user that has been authenticated inside of it.
// // });
// // module.exports = router;

// // require("dotenv").config();
// const express = require("express");
// const router = express.Router();
// const userProfilesController = require("../../controllers/userProfilesController");
// // const bcrypt = require("bcryptjs");
// // const passport = require("passport");
// // const cors = require("cors");
// // const jwt = require("jsonwebtoken");
// // const authToken = require("../../config/authToken");
// // User model
// const UserProfile = require("../../models/UserProfile");
// const Invite = require("../../models/invite");

// // Passport middleware
// // router.use(passport.initialize());
// // router.use(passport.session());
// // require("../../config/auth")(passport);

// // // Login
// // router.post("/login", (req, res, next) => {
// //   console.log("hit login");
// //   passport.authenticate("local", (err, user) => {
// //     if (err) throw err;
// //     if (!user) res.send("No User Exists");
// //     else {
// //       req.logIn(user, (err) => {
// //         // // console.log("user", { user });
// //         // const authHeader = req.headers["authorization"];
// //         // const token = authHeader && authHeader.split(" ")[1];
// //         // console.log(token);
// //         // if (token == null) return res.sendStatus(401);

// //         // const username = req.body.username;
// //         // const user = { name: username };
// //         const payload = { user: { id: user.id } };
// //         // console.log({ user });
// //         jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
// //           console.log(payload);
// //           console.log(token);
// //           if (err) {
// //             console.log(err);
// //           }
// //           res.json(token);
// //         });
// //         if (err) throw err;
// //       });
// //     }
// //   })(req, res, next);
// // });

// // // Register
// // router.post("/profile", (req, res) => {
// //   console.log("profile");
// //   userProfilesController.findOne(
// //     req,
// //     res
//     // { email: req.body.email },
//     // async (err, doc) => {
//     //   if (err) throw err;
//     //   if (doc) alert("Error: Duplicate entry");
//     //   if (!doc) {
//     //     // const hashedPassword = await bcrypt.hash(req.body.password, 10);
//     //     console.log("profile");
//     //     console.log(req.body.email);
//     //     const newUserProfile = new UserProfile({
//     //       email: req.body.email,
//     //       organization: req.body.organization,
//     //       website: req.body.website,
//     //       facebook: req.body.facebook,
//     //       instagram: req.body.instagram,
//     //       twitter: req.body.twitter,
//     //     });
//     //     await newUserProfile.save();
//     //     res.send("profile Success");
//     //   }
//     // }
//   );
// });

// // // Invite
// // router.post("/invites", (req, res) => {
// //   console.log(req.body);
// //   console.log("hit invite");
// //   Invite.findOne({ email: req.body.email }, async (err, doc) => {
// //     if (err) throw err;
// //     if (doc) res.send("Already invited");
// //     if (!doc) {
// //       console.log("Success");
// //       console.log(req.body.email);
// //       const newInvite = new Invite({
// //         email: req.body.email,
// //         organization: req.body.organization,
// //         host: req.body.host,
// //       });
// //       await newInvite.save();
// //       res.send("Success");
// //     }
// //   });
// // });

// //get users
// // router.get("/users", authToken, (req, res) => {
// //   res.send(req.users);
// // });
// // router.route("/userProfiles", authToken).get(userProfilesController.findAll);

// module.exports = router;
// // module.exports = authenticateToken;
