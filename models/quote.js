// Mongoose model Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  content: {type: String, required: true},
  author: {type: String, required: true},
  votes: {type: Number}
});

module.exports = mongoose.model('Quote', schema);
