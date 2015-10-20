var mongoose = require('mongoose');

var RatingSchema = mongoose.Schema({
  rate: Number,
  timeSlot: Number,
  dayOfWeek: String,
  createdAt: { type : Date, default: Date.now }
});

module.exports = mongoose.model('Rating', RatingSchema);

