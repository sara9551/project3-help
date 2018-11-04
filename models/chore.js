const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const choresSchema = new Schema({
  chore: { type: String, required: true },
  date: { type: Date, default: Date.now },
  description: String,
});

const Chores = mongoose.model("Chores", choresSchema);

module.exports = Chores;
