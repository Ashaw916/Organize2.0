const mongoose = require("mongoose");

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  video: { type: String, required: true },
  date_added: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Videos", videoSchema);
