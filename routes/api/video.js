const router = require("express").Router();
const videosController = require("../../controllers/videosController");

// Matches with "/api/videos"
router.route("/").get(videosController.findAll).post(videosController.create);

// Matches with "/api/videos/:id"
router
  .route("/:id")
  .get(videosController.findById)
  .put(videosController.update)
  .delete(videosController.remove);

module.exports = router;
