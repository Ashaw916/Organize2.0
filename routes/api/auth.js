const router = require("express").Router();
const authController = require("../../controllers/authController");
const Auth = require("../../models/auth");
// auth Route
router.post("/", (req, res) => {
  console.log("route", req.body.user);
  const { user, bool } = req.body;
  const userId = req.body.user.replace(/['"]+/g, "");
  authController.findById({
    user: userId,
  });
});

router.get("/", (req, res) => {
  console.log("route", req);
  const { user, bool } = req.body;
});

module.exports = router;
