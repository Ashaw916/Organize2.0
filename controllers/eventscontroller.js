const db = require('../models');

// Defining methods for the eventsController
module.exports = {
  findAll: async function (req, res) {
    try {
      const where = Object.keys(req.query || {}).length ? req.query : undefined;
      const events = await db.Events.findAll({ where, order: [['date_added', 'DESC']] });
      res.json(events);
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
  findById: async function (req, res) {
    try {
      const event = await db.Events.findByPk(req.params.id);
      res.json(event);
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
  create: async function (req, res) {
    try {
      // If req.body includes userId, use it; otherwise ignore association
      const newEvent = await db.Events.create(req.body);
      res.json(newEvent);
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
  update: async function (req, res) {
    try {
      await db.Events.update(req.body, { where: { id: req.params.id } });
      const event = await db.Events.findByPk(req.params.id);
      res.json(event);
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
  remove: async function (req, res) {
    try {
      const deleted = await db.Events.destroy({ where: { id: req.params.id } });
      res.json({ deleted });
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
};
