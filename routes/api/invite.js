const express = require("express");
const router = express.Router();
const inviteController = require("../../controllers/inviteController");

// // Invite
// router.post("/invites", (req, res) => {
//   console.log(req.body);
//   console.log("hit invite");
//   Invite.findOne({ email: req.body.email }, async (err, doc) => {
//     if (err) throw err;
//     if (doc) res.send("Already invited");
//     if (!doc) {
//       console.log("Success");
//       console.log(req.body.email);
//       const newInvite = new Invite({
//         email: req.body.email,
//         organization: req.body.organization,
//         host: req.body.host,
//       });
//       await newInvite.save();
//       res.send("Success");
//     }
//   });
// });

// Matches with "/api/events/:id"
router
  .route("/:id")
  .get(inviteController.findById)
  .put(inviteController.update)
  .delete(inviteController.remove);

module.exports = router;
