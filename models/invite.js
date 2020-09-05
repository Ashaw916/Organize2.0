const mongoose = require("mongoose");

const invite = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
  date_added: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Invite", invite);
