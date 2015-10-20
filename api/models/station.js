var mongoose = require('mongoose');

// var Rating = mongoose.model('Rating');

var StationSchema = mongoose.Schema({
  name: String,
  rate: [{ type: mongoose.Schema.ObjectId, ref: 'Rating' }] ,
  createdAt: { type : Date, default: Date.now }
});

module.exports = mongoose.model('Station', StationSchema);

