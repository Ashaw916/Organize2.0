const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  start_date: { type: String, required: true },
  end_date: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  organization: { type: String, required: true },
  event_url: { type: String, required: true },
  date_added: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Events", eventSchema);
