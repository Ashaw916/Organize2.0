const { sequelize, DataTypes } = require('./sequelize');

const UserProfile = sequelize.define(
  'UserProfile',
  {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    email: { type: DataTypes.STRING, allowNull: false },
    organization: { type: DataTypes.STRING, allowNull: false },
    website: { type: DataTypes.STRING, allowNull: true },
    facebook: { type: DataTypes.STRING, allowNull: true },
    instagram: { type: DataTypes.STRING, allowNull: true },
    twitter: { type: DataTypes.STRING, allowNull: true },
    date_added: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { tableName: 'user_profiles' }
);

module.exports = UserProfile;
