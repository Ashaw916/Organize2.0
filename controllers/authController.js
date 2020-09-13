require("dotenv").config();
const db = require("../models");

// Defining methods for the articlesController
module.exports = {
  findAll: function (req, res) {
    db.Auth.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => {
        res.json(dbModel);
      })
      .catch((err) => res.status(422).json(err));
  },
  findById: function (req, res) {
    console.log(req);
    db.Auth.findById(req.user).then((data) => console.log(data));
    //   .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("hit controller", req);
    db.Auth.create(req).then((res) => res.send(res));
    //   .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    console.log("before", req);
    console.log({ user: req.user }, req.bool);

    db.Auth.updateOne({ user: req.user }, { $set: { bool: req.bool } }).then(
      (req) => {
        console.log("after", req);
        // res.json(res);
      }
    );
    //   .catch((err, res) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Auth.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
