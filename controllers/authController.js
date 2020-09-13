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
  findOne: function (req, res) {
    console.log("res", res);
    console.log("req", res);
    db.Auth.findOne({ user: req.user }, (err, doc) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Result : ", doc.bool);
      }
      console.log("res", res);
    }).then((doc, res) => {
      if (doc.bool === "false") {
        res.send("invalid");
      }
      console.log(doc.bool);
      res.send("valid");
    });
    //   .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    console.log("hit controller", req);
    db.Auth.create(req).then((res) => res.send(res));
    //   .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    console.log("before", req);
    // console.log({ user: req.user }, req.bool);

    db.Auth.updateOne({ user: req.user }, { $set: { bool: req.bool } }).then(
      (res) => {
        console.log("after");
        // res.send("logout");
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
