const db = require('../models');

// Defining methods for the userProfilesController
module.exports = {
  findAll: async function (req, res) {
    try {
      const where = Object.keys(req.query || {}).length ? req.query : undefined;
      const profiles = await db.UserProfile.findAll({ where, order: [['date_added', 'DESC']] });
      res.json(profiles);
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
  findOne: async function (req, res) {
    try {
      const existing = await db.UserProfile.findOne({ where: { email: req.body.email } });
      if (existing) return res.status(409).json({ message: 'Duplicate entry' });
      const newUserProfile = await db.UserProfile.create({
        email: req.body.email,
        organization: req.body.organization,
        website: req.body.website,
        facebook: req.body.facebook,
        instagram: req.body.instagram,
        twitter: req.body.twitter,
      });
      res.json(newUserProfile);
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
  create: async function (req, res) {
    try {
      const profile = await db.UserProfile.create(req.body);
      res.json(profile);
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
  update: async function (req, res) {
    try {
      await db.UserProfile.update(req.body, { where: { id: req.params.id } });
      const profile = await db.UserProfile.findByPk(req.params.id);
      res.json(profile);
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
  remove: async function (req, res) {
    try {
      const deleted = await db.UserProfile.destroy({ where: { id: req.params.id } });
      res.json({ deleted });
    } catch (err) {
  console.error("Controller error:", err);
  res.status(500).json({ error: "Internal server error" });
}
  },
};
