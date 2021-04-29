const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: String,
  status: String
});

const model = mongoose.model('Todo', todoSchema);

module.exports = model
