var mongoose = require('mongoose');

var Rating = mongoose.model('Rating');

var stationSchema = mongoose.Schema({
  name: String,
  ratings: [Rating.schema],
  createdAt: { type : Date, default: Date.now }
});

module.exports = mongoose.model('Station', stationSchema);

