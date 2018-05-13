const mongoose = require('mongoose');

const { Schema } = mongoose;

const pageSchema = new Schema({
  route: String,
  html: String,
});

module.exports = mongoose.model('Page', pageSchema);
