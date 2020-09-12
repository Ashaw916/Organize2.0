const mongoose = require("mongoose");

const userProfile = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: false,
  },
  facebook: {
    type: String,
    required: false,
  },
  instagram: {
    type: String,
    required: false,
  },
  twitter: {
    type: String,
    required: false,
  },
  date_added: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("UserProfile", userProfile);
