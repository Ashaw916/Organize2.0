const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  date_added: { type: Date, default: Date.now },
  description: { type: String, required: true },
  location: { type: String, required: true },
  organization: { type: String, required: true },
  start_time: { type: String, required: true },
  event_url: { type: String, required: true }
});

const Events = mongoose.model("Events", eventSchema);

module.exports = Events;
