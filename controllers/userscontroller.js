const db = require('../models');

// Defining methods for the users
module.exports = {
  findAll: async function (req, res) {
    try {
      const where = Object.keys(req.query || {}).length ? req.query : undefined;
      const users = await db.User.findAll({
        where,
        order: [['date', 'DESC']],
        include: ['articles', 'events', 'videos', 'links'],
      });
      res.json(users);
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
  findOne: async function (req, res) {
    try {
      const user = await db.User.findByPk(req.params.id, { include: ['articles', 'events', 'videos', 'links'] });
      res.json(user);
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
  create: async function (req, res) {
    try {
      const user = await db.User.create(req.body);
      res.json(user);
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
  update: async function (req, res) {
    try {
      await db.User.update(req.body, { where: { id: req.params.id } });
      const user = await db.User.findByPk(req.params.id);
      res.json(user);
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
  remove: async function (req, res) {
    try {
      const deleted = await db.User.destroy({ where: { id: req.params.id } });
      res.json({ deleted });
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
};
