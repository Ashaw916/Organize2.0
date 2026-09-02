require('dotenv').config();
const express = require('express');
const passport = require('passport');
const routes = require('./routes');

const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

if (process.env.NODE_ENV === 'production') {
  console.log('production');
  app.use(express.static('client/build'));
}
//port
const PORT = process.env.PORT || 3001;

// Passport Config
require('./config/passport')(passport);

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(cookieParser(process.env.SECRET));

//routes
app.use(routes);
app.use('/', require('./routes/index'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/events', require('./routes/api/events'));
app.use('/api/articles', require('./routes/api/articles'));
app.use('/api/links', require('./routes/api/links'));

// Initialize Sequelize and sync models
const { sequelize } = require('./models');

sequelize
  .authenticate()
  .then(() => console.log('MySQL connection established.'))
  .catch((err) => console.error('Unable to connect to MySQL:', err));

sequelize
  .sync()
  .then(() => console.log('Sequelize models synced'))
  .catch((err) => console.error('Error syncing models:', err));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/auth')(passport);

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
console.log();
