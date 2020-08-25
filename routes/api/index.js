const router = require("express").Router();
const eventRoutes = require("./events");

// Post routes
router.use("/events", eventRoutes);

module.exports = router;
