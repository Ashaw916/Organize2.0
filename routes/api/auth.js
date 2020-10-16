const router = require("express").Router();
const authController = require("../../controllers/authController");
const Auth = require("../../models/auth");
// auth Route
router.post("/", (req, res) => {
  console.log("route", req.body.user);
  const { user, bool } = req.body;
  const userId = req.body.user.replace(/['"]+/g, "");
  console.log("userId", userId);
  // authController.findOne({
  //   user: userId,
  // });
  if (userId === "null") {
    return res.send("invalid");
  } else {
    Auth.findOne({ user: userId }, (err, doc) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Result : ", doc.bool);
      }
      // console.log("res", );
    }).then((req, res) => {
      console.log("doc", req);
      if (req.bool === "false") {
        console.log("invalid", req.bool);
        sendInvalid();
      }
      console.log("valid", req.bool);
      sendValid();
    });

    function sendValid() {
      return res.send("valid");
    }
    function sendInvalid() {
      return res.send("invalid");
    }
  }
  //   .catch((err) => res.status(422).json(err));
});

router.get("/", (req, res) => {
  console.log("route", req);
  const { user, bool } = req.body;
});

module.exports = router;
