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
      res.status(422).json(err);
    }
  },
  findOne: async function (req, res) {
    try {
      const userIdentifier = req.user && req.user.id ? req.user.id : req.user;
      const auth = await db.Auth.findOne({ where: { userId: userIdentifier } });
      if (!auth) return res.send('invalid');
      return res.send(auth.bool ? 'valid' : 'invalid');
    } catch (err) {
      res.status(422).json(err);
    }
  },
  create: async function (req, res) {
    try {
      const data = req.body || req;
      const created = await db.Auth.create(data);
      res.json(created);
    } catch (err) {
      res.status(422).json(err);
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
      res.status(422).json(err);
    }
  },
  remove: async function (req, res) {
    try {
      const deleted = await db.Auth.destroy({ where: { id: req.params.id } });
      res.json({ deleted });
    } catch (err) {
      res.status(422).json(err);
    }
  },
};
