const mongoose = require("mongoose");

const UserProfileSchema = new mongoose.Schema({
  organization: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const UserProfile = mongoose.model("UserProfile", UserProfileSchema);

module.exports = UserProfile;
