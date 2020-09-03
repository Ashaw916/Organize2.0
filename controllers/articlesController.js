require("dotenv").config();
const db = require("../models");
const authToken = require("../config/authToken");
const jwt = require("jsonwebtoken");

// Defining methods for the articlesController
module.exports = {
  findAll: function (req, res) {
    db.Articles.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Articles.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("CREATE:", req.body);
    authToken(req, res, function (req, res) {
      console.log("controller ", req);
      db.Articles.create(req.body)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    });
  },
  update: function (req, res) {
    db.Articles.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Articles.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
