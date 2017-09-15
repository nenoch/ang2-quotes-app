var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var User = require('./user');

var schema = new Schema({
  content: {type: String, required: true},
  author: {type: String, required: true},
  votes: {type: Number},
  user: {type: Schema.Types.ObjectId, ref: 'User'}
});

schema.post('remove', function(quote){
  User.findById(quote.user, function(err, user){
    user.quotes.pull(quote);
    user.save();
  })
})

module.exports = mongoose.model('Quote', schema);
