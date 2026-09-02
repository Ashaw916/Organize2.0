const { sequelize, DataTypes } = require('./sequelize');

const Articles = sequelize.define(
  'Articles',
  {
    id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    title: { type: DataTypes.STRING, allowNull: false },
    author: { type: DataTypes.STRING, allowNull: false },
    body: { type: DataTypes.TEXT, allowNull: false },
    date_added: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    description: { type: DataTypes.TEXT, allowNull: false },
    source: { type: DataTypes.STRING, allowNull: false },
    type: { type: DataTypes.STRING, allowNull: false },
    userId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: true },
  },
  { tableName: 'articles' }
);

module.exports = Articles;