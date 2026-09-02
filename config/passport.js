const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// User model
const User = require('../models/user');

module.exports = function (passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
      try {
        const user = await User.findOne({ where: { email } });
        if (!user) return done(null, false, { message: 'Incorrect email' });
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) return done(null, user);
        return done(null, false, { message: 'Incorrect password' });
      } catch (err) {
        return done(err);
      }
    })
  );

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(async function (id, done) {
    try {
      const user = await User.findByPk(id);
      done(null, user);
    } catch (err) {
      done(err);
    }
  });
};
