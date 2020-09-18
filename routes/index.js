const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);
router.get("/", (req, res) => res.send("welcome"));

module.exports = router;
