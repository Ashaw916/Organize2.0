const router = require("express").Router();
const userRoutes = require("./users");
// const inviteRoutes = require("./invite");
const eventRoutes = require("./events");
const articleRoutes = require("./articles");
const linkRoutes = require("./links");
const videoRoutes = require("./video");
const userProfiles = require("./userProfiles");
const user = require("./users");

// Post routes
router.use("/events", eventRoutes);
router.use("/articles", articleRoutes);
router.use("/links", linkRoutes);
router.use("/videos", videoRoutes);
router.use("/userProfiles", userProfiles);
router.use("/users", user);

module.exports = router;
