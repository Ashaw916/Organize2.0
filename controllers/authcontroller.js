require('dotenv').config();
const db = require('../models');

// Defining methods for the authController
module.exports = {
  findAll: async function (req, res) {
    try {
      const where = Object.keys(req.query || {}).length ? req.query : undefined;
      const auths = await db.Auth.findAll({ where, order: [['date', 'DESC']] });
      res.json(auths);
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
  findOne: async function (req, res) {
    try {
      const userIdentifier = req.user && req.user.id ? req.user.id : req.user;
      const auth = await db.Auth.findOne({ where: { userId: userIdentifier } });
      if (!auth) return res.send('invalid');
      return res.send(auth.bool ? 'valid' : 'invalid');
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
  create: async function (req, res) {
    try {
      const data = req.body || req;
      const created = await db.Auth.create(data);
      res.json(created);
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
  update: async function (req, res) {
    try {
      const userIdentifier = req.user && req.user.id ? req.user.id : req.user;
      const boolVal = req.body && typeof req.body.bool !== 'undefined' ? req.body.bool : req.bool;
      await db.Auth.update({ bool: boolVal }, { where: { userId: userIdentifier } });
      const updated = await db.Auth.findOne({ where: { userId: userIdentifier } });
      res.json(updated);
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
  remove: async function (req, res) {
    try {
      const deleted = await db.Auth.destroy({ where: { id: req.params.id } });
      res.json({ deleted });
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
};
