var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  name: String,
  createdAt: { type : Date, default: Date.now }
});

module.exports = mongoose.model('UserSchema', UserSchema);
