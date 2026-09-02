const { sequelize, DataTypes } = require('./sequelize');

const Invite = sequelize.define(
  'Invite',
  {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    email: { type: DataTypes.STRING, allowNull: false },
    organization: { type: DataTypes.STRING, allowNull: false },
    host: { type: DataTypes.STRING, allowNull: false },
    date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { tableName: 'invites' }
);

module.exports = Invite;
