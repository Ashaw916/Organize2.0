const db = require("../models");

// Defining methods for the articlesController
module.exports = {
  findAll: function (req, res) {
    db.UserProfile.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  findOne: function (req, res) {
    db.UserProfile.findOne({ email: req.body.email }, async (err, doc) => {
      console.log(doc);
      if (err) throw err;
      if (doc) res.send("Error: Duplicate entry");
      if (!doc) {
        // const hashedPassword = await bcrypt.hash(req.body.password, 10);
        console.log("profile controller");
        // console.log({
        //   organization: req.body.organization,
        //   website: req.body.website,
        //   facebook: req.body.facebook,
        //   instagram: req.body.instagram,
        //   twitter: req.body.twitter,
        // });
        const newUserProfile = new db.UserProfile({
          email: req.body.email,
          organization: req.body.organization,
          website: req.body.website,
          facebook: req.body.facebook,
          instagram: req.body.instagram,
          twitter: req.body.twitter,
        });
        await newUserProfile.save();
        // res.send("profile Success");
      }
    })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  create: function (req, res) {
    db.UserProfile.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  update: function (req, res) {
    db.UserProfile.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.UserProfile.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
};
