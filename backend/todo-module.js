const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  item: {
    type: String,
    required: true,
    trim: true,
  },
});

const todos = mongoose.model("TODO List", todoSchema);

module.exports = todos;
