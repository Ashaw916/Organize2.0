const User = require('./User');
const Articles = require('./articles');
const Events = require('./events');
const Links = require('./links');
const UserProfile = require('./UserProfile');
const Videos = require('./video');
const Invite = require('./invite');
const Auth = require('./auth');
const { sequelize } = require('./sequelize');

// Associations
User.hasMany(Articles, { foreignKey: 'userId', as: 'articles' });
Articles.belongsTo(User, { foreignKey: 'userId', as: 'user' });

User.hasMany(Events, { foreignKey: 'userId', as: 'events' });
Events.belongsTo(User, { foreignKey: 'userId', as: 'user' });

User.hasMany(Videos, { foreignKey: 'userId', as: 'videos' });
Videos.belongsTo(User, { foreignKey: 'userId', as: 'user' });

User.hasMany(Links, { foreignKey: 'userId', as: 'links' });
Links.belongsTo(User, { foreignKey: 'userId', as: 'user' });

module.exports = {
  sequelize,
  User,
  Articles,
  Events,
  Links,
  UserProfile,
  Videos,
  Invite,
  Auth,
};
