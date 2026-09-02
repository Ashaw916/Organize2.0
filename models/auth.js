const { sequelize, DataTypes } = require('./sequelize');

const Auth = sequelize.define(
  'Auth',
  {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    userId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false, unique: true },
    bool: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false },
    date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { tableName: 'auth' }
);

module.exports = Auth;
