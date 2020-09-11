const db = require("../models");

// Defining methods for the invite
module.exports = {
  findAll: function (req, res) {
    db.Invite.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findOne: function (query) {
    console.log("controller", query);
    return db.Invite.findOne(query);
    // db.Invite.findOne(query)
    //   .then((dbModel) => {
    //     console.log("dbmodel", dbModel);
    //     // res.json(dbModel);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     // res.status(422).json(err);
    //   });
  },
  create: function (req, res) {
    db.Invite.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.Invite.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Invite.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
