require('dotenv').config();
const db = require('../models');
const authToken = require('../config/authToken');

// Defining methods for the articlesController
module.exports = {
  findAll: async function (req, res) {
    try {
      const where = Object.keys(req.query || {}).length ? req.query : undefined;
      const articles = await db.Articles.findAll({ where, order: [['date_added', 'DESC']] });
      res.json(articles);
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
  findById: async function (req, res) {
    try {
      const article = await db.Articles.findByPk(req.params.id);
      res.json(article);
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
  create: async function (req, res) {
    try {
      const article = await db.Articles.create(req.body);
      res.json(article);
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
  update: async function (req, res) {
    try {
      await db.Articles.update(req.body, { where: { id: req.params.id } });
      const article = await db.Articles.findByPk(req.params.id);
      res.json(article);
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
  remove: async function (req, res) {
    try {
      const deleted = await db.Articles.destroy({ where: { id: req.params.id } });
      res.json({ deleted });
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
};
