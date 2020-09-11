const db = require("../models");

// Defining methods for the invite
module.exports = {
  findAll: function (req, res) {
    db.Invite.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findOne: function (req, res) {
    console.log("controller", req.body);
    db.Invite.findOne({ email: req.body.email })
      .then((dbModel) => {
        if (dbModel) res.send("Already invited");
        if (!dbModel) {
          console.log("Success");
          console.log("2", req.body);
          const newInvite = new db.Invite({
            email: req.body.email,
            organization: req.body.organization,
            host: req.body.host,
          });
          newInvite.save().then((dbModel) => {
            res.send("Success");
          });
        }
      })
      .catch((err) => {
        throw err;
      });
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
