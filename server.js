const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const routes = require("./routes");
const cors = require("cors");
const app = express();
// const expressLayouts = require("express-ejs-layouts");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;

// Passport Config
require("./config/passport")(passport);

// DB Config
const db = require("./config/keys").mongoURI;

// middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// cors
app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
    saveUninitialized: true,
  })
);
app.use(
  session({
    secret: "svsas",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser("svsas"));

//routes
app.use(routes);
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/api/users"));

// // EJS
// app.use(expressLayouts);
// app.set("view engine", "ejs");
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
// mongodb+srv://admin:<password>@cluster0.ozd49.mongodb.net/<dbname>?retryWrites=true&w=majority

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// // Global variables
// app.use(function (req, res, next) {
//   res.locals.success_msg = req.flash("success_msg");
//   res.locals.error_msg = req.flash("error_msg");
//   res.locals.error = req.flash("error");
//   next();
// });

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
console.log();
