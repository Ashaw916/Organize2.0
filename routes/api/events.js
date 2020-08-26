const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// Matches with "/api/posts"
router
  .route("/")
  .get(eventsController.findAll)
  .post(eventsController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(eventsController.findById)
  .put(eventsController.update)
  .delete(eventsController.remove);

module.exports = router;
