const db = require('../models');

// Defining methods for the linksController
module.exports = {
  findAll: async function (req, res) {
    try {
      const where = Object.keys(req.query || {}).length ? req.query : undefined;
      const links = await db.Links.findAll({ where, order: [['date_added', 'DESC']] });
      res.json(links);
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
  findById: async function (req, res) {
    try {
      const link = await db.Links.findByPk(req.params.id);
      res.json(link);
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
  create: async function (req, res) {
    try {
      const link = await db.Links.create(req.body);
      res.json(link);
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
  update: async function (req, res) {
    try {
      await db.Links.update(req.body, { where: { id: req.params.id } });
      const link = await db.Links.findByPk(req.params.id);
      res.json(link);
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
  remove: async function (req, res) {
    try {
      const deleted = await db.Links.destroy({ where: { id: req.params.id } });
      res.json({ deleted });
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  }
};
