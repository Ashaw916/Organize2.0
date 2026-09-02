const { sequelize, DataTypes } = require('./sequelize');

const Events = sequelize.define(
  'Events',
  {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    start_date: { type: DataTypes.STRING, allowNull: false },
    end_date: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    location: { type: DataTypes.STRING, allowNull: false },
    organization: { type: DataTypes.STRING, allowNull: false },
    event_url: { type: DataTypes.STRING, allowNull: false },
    date_added: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    userId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: true },
  },
  { tableName: 'events' }
);

module.exports = Events;
