const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const user = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  articles: [{ type: Schema.Types.ObjectId, ref: 'Articles' }],
  events: [{ type: Schema.Types.ObjectId, ref: 'Events' }],
  videos: [{ type: Schema.Types.ObjectId, ref: 'Videos' }],
  links: [{ type: Schema.Types.ObjectId, ref: 'Links' }],
});

module.exports = mongoose.model("User", user);
