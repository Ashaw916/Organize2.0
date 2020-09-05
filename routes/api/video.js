const router = require("express").Router();
const linksController = require("../../controllers/linksController");

// Matches with "/api/posts"
router.route("/").get(linksController.findAll).post(linksController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(linksController.findById)
  .put(linksController.update)
  .delete(linksController.remove);

module.exports = router;
