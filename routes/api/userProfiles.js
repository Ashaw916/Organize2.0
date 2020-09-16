const router = require("express").Router();
const userProfilesController = require("../../controllers/userProfilesController");
const authToken = require("../../config/authToken");

// Matches with "/api/userprofiles"
router.route("/").get(userProfilesController.findAll());

// Matches with "/api/userprofiles"
router.post("/", authToken, (req, res) => {
  userProfilesController.create(req, res);
});

// Matches with "/api/userProfiles/:id"
router
  .route("/:id")
  .get(userProfilesController.findById)
  .put(userProfilesController.update)
  .delete(userProfilesController.remove);

module.exports = router;
