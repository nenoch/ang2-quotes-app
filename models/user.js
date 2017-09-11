// Mongoose model Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  username: {type: String, required: true, unique:true},
  password: {type: String, required: true},
  email: {type:String, required:true, unique:true},
  quotes: [{type: Schema.Types.Object.Id, ref: 'Quote'}]
});

module.exports = mongoose.model('User', schema);
