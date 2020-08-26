const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes
router.use("/api", apiRoutes);
//login route
router.get("/login", (req, res) => res.send("login"));
//register route
router.get("/register", (req, res) => res.send("register"));
// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
