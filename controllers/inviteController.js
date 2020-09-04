const mongoose = require("mongoose");
console.log("controller");
const eventSchema = new mongoose.Schema({
  email: { type: String, required: true },
  organization: { type: Date, required: true },
  host: { type: Date, required: true },
  date_added: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Invite", eventSchema);
