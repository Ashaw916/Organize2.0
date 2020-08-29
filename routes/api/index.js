const router = require("express").Router();
const eventRoutes = require("./events");
const articleRoutes = require("./articles");
const linkRoutes = require("./links");

// Post routes
router.use("/events", eventRoutes);
router.use("/articles", articleRoutes);
router.use("/links", linkRoutes);

module.exports = router;
