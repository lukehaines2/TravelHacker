var mongoose = require('mongoose');

var ratingSchema = mongoose.Schema({
  rate: Number,
  timeSlot: Number,
  dayOfWeek: String,
  createdAt: { type : Date, default: Date.now }
});

module.exports = mongoose.model('Rating', ratingSchema);

