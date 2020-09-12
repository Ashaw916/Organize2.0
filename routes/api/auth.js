const router = require("express").Router();
const authToken = require("../../config/authToken");
// auth Route
router.route("/auth", (req, res) => {
  console.log("auth", req);
});

module.exports = router;
