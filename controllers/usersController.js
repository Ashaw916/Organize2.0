const db = require("../models");

// Defining methods for the users
module.exports = {
  findAll: function (req, res) {
    // console.log("controller", req);
    db.User.find(req.query)
      .sort({ date: -1 })
      .populate("articles")
      .populate("events")
      .populate("videos")
      .populate("links")
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findOne: function (req, res) {
    // console.log("controller", req);
    db.User.findOne(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    // console.log("controller", req);
    db.User.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    // console.log("controller", req);
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    // console.log("controller", req);
    db.User.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
