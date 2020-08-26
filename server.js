const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/organize");
// mongodb+srv://admin:<password>@cluster0.ozd49.mongodb.net/<dbname>?retryWrites=true&w=majority
// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
console.log();

//authentication in the front end
//control action
// pass user +role and compare with requirement
//use passport
//use bcrypt for encryption
//send invitations via sms. use bcrypt to encrypt the phone number
//create internal api key and store in .env so that outside calls wont be
