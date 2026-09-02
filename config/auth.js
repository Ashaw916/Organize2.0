const User = require('../models/user');
const bcrypt = require('bcryptjs');
const localStrategy = require('passport-local').Strategy;
// passport logs user in, and verifies they have an account
module.exports = function (passport) {
  passport.use(
    new localStrategy({ usernameField: 'email' }, async (email, password, done) => {
      try {
        const user = await User.findOne({ where: { email } });
        if (!user) return done(null, false);
        const result = await bcrypt.compare(password, user.password);
        if (result === true) return done(null, user);
        return done(null, false);
      } catch (err) {
        return done(err);
      }
    })
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.email);
  });
  passport.deserializeUser(async (email, cb) => {
    try {
      const user = await User.findOne({ where: { email } });
      const userInformation = {
        email: user ? user.email : null,
      };
      cb(null, userInformation);
    } catch (err) {
      cb(err);
    }
  });
};
