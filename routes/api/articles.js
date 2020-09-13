const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");
const authToken = require("../../config/authToken");

// Matches with "/api/articles"
router.route("/").get(articlesController.findAll);

// Matches with "/api/articles"
router.post("/", authToken, (req, res) => {
  articlesController.create(req, res);
});

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(articlesController.findById)
  .put(articlesController.update)
  .delete(articlesController.remove);

module.exports = router;
