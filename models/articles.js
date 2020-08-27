const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  body: { type: String, required: true },
  date_added: { type: Date, default: Date.now },
  description: { type: String, required: true },
  source: { type: String, required: true },
  type: { type: String, required: true }
});

const Articles = mongoose.model("Articles", articleSchema);

module.exports = Articles;