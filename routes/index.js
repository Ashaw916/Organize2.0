const router = require("express").Router();
const apiRoutes = require("./api");
const path = require("path");

// API Routes
router.use("/api", apiRoutes);
// router.get("/", (req, res) => res.send("welcome"));

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
