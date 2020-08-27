const router = require("express").Router();
const eventRoutes = require("./events");
const articleRoutes = require("./articles");

// Post routes
router.use("/events", eventRoutes);
router.use("/articles", articleRoutes);

module.exports = router;
