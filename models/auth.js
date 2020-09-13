const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const auth = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    reuired: true,
    unique: true,
    ref: "User",
  },
  bool: {
    type: Boolean,
    default: false,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Auth", auth);

// ref for joins indise of the user
