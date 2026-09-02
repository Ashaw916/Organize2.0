const db = require('../models');

// Defining methods for the invite
module.exports = {
  findAll: async function (req, res) {
    try {
      const where = Object.keys(req.query || {}).length ? req.query : undefined;
      const invites = await db.Invite.findAll({ where, order: [['date', 'DESC']] });
      res.json(invites);
    } catch (err) {
      res.status(422).json(err);
    }
  },
  findOne: async function (req, res) {
    try {
      const existing = await db.Invite.findOne({ where: { email: req.body.email } });
      if (existing) return res.send('exists');
      const invite = await db.Invite.create({
        email: req.body.email,
        organization: req.body.organization,
        host: req.body.host,
      });
      res.send('Success');
    } catch (err) {
      res.status(422).json(err);
    }
  },
  create: async function (req, res) {
    try {
      const invite = await db.Invite.create(req.body);
      res.json(invite);
    } catch (err) {
      res.status(422).json(err);
    }
  },
  update: async function (req, res) {
    try {
      await db.Invite.update(req.body, { where: { id: req.params.id } });
      const invite = await db.Invite.findByPk(req.params.id);
      res.json(invite);
    } catch (err) {
      res.status(422).json(err);
    }
  },
  remove: async function (req, res) {
    try {
      const deleted = await db.Invite.destroy({ where: { id: req.params.id } });
      res.json({ deleted });
    } catch (err) {
      res.status(422).json(err);
    }
  },
};
