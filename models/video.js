const { sequelize, DataTypes } = require('./sequelize');

const Videos = sequelize.define(
  'Videos',
  {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    date_added: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    description: { type: DataTypes.TEXT, allowNull: false },
    src: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    userId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: true },
  },
  { tableName: 'videos' }
);

module.exports = Videos;
