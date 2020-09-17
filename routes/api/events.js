const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");
// const authToken = require("../../config/authToken");

// Matches with "/api/events"
router
.route("/")
.get(eventsController.findAll)
.post(eventsController.create);

// router.post("/", (req, res) => {
//   eventsController.create(req, res);
// });

// Matches with "/api/events/:id"
router
  .route("/:id")
  .get(eventsController.findById)
  .put(eventsController.update)
  .delete(eventsController.remove);

//authToken, goes inbetween /events and (req, res)

// router.route("/events", (req, res) => {
//   eventsController.create;
//   eventsController.update;
//   eventsController.remove;
// });

module.exports = router;
