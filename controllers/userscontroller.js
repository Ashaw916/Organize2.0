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
      res.status(422).json(err);
    }
  },
  findOne: async function (req, res) {
    try {
      const user = await db.User.findByPk(req.params.id, { include: ['articles', 'events', 'videos', 'links'] });
      res.json(user);
    } catch (err) {
      res.status(422).json(err);
    }
  },
  create: async function (req, res) {
    try {
      const user = await db.User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(422).json(err);
    }
  },
  update: async function (req, res) {
    try {
      await db.User.update(req.body, { where: { id: req.params.id } });
      const user = await db.User.findByPk(req.params.id);
      res.json(user);
    } catch (err) {
      res.status(422).json(err);
    }
  },
  remove: async function (req, res) {
    try {
      const deleted = await db.User.destroy({ where: { id: req.params.id } });
      res.json({ deleted });
    } catch (err) {
      res.status(422).json(err);
    }
  },
};
