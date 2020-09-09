const express = require("express");
const router = express.Router();
// User model
const UserProfile = require("../../models/UserProfile");

// Register
router.post("/registerProfile", (req, res) => {
  console.log("hit reg");
  User.findOne({ organization: req.body.email }, async (err, doc) => {
    if (err) throw err;
    if (doc) res.send("User Exists");
    if (!doc) {
      console.log("Success");
      console.log(req.body);
      const newUser = new UserProfile({
        organization: req.body.email,
        role: hashedPassword,
      });

      await newUser.save();
      res.send("Success");
    }
  });
});

//get users
router.get("/userprofiles", (req, res) => {
  res.send(req.users); // The req.user stores the entire user that has been authenticated inside of it.
});
module.exports = router;
