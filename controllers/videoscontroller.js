const db = require('../models');

// Defining methods for the VideosController
module.exports = {
  findAll: async function (req, res) {
    try {
      const where = Object.keys(req.query || {}).length ? req.query : undefined;
      const videos = await db.Videos.findAll({ where, order: [['date_added', 'DESC']] });
      res.json(videos);
    } catch (err) {
      console.error('VideosController.findAll error:', err);
      res.status(500).json({ error: 'Failed to retrieve videos' });
    }
  },
  findById: async function (req, res) {
    try {
      const video = await db.Videos.findByPk(req.params.id);
      res.json(video);
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
  create: async function (req, res) {
    try {
      const video = await db.Videos.create(req.body);
      res.json(video);
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
  update: async function (req, res) {
    try {
      await db.Videos.update(req.body, { where: { id: req.params.id } });
      const video = await db.Videos.findByPk(req.params.id);
      res.json(video);
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
  remove: async function (req, res) {
    try {
      const deleted = await db.Videos.destroy({ where: { id: req.params.id } });
      res.json({ deleted });
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
};
