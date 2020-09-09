const router = require("express").Router();
const userRoutes = require("./users");
// const inviteRoutes = require("./invite");
const eventRoutes = require("./events");
const articleRoutes = require("./articles");
const linkRoutes = require("./links");
const videoRoutes = require("./video");

// Post routes
router.use("/events", eventRoutes);
router.use("/articles", articleRoutes);
router.use("/links", linkRoutes);
router.use("/videos", videoRoutes);
// router.use("/invite", inviteRoutes);
router.use("/users", userRoutes);

module.exports = router;
