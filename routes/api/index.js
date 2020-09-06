const router = require("express").Router();
const eventRoutes = require("./events");
const articleRoutes = require("./articles");
const linkRoutes = require("./links");
const videoRoutes = require("./video");

// Post routes
router.use("/events", eventRoutes);
router.use("/articles", articleRoutes);
router.use("/links", linkRoutes);
router.use("/videos", videoRoutes);

module.exports = router;
