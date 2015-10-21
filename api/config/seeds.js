// var faker = require('faker/locale/en_GB')
// var faker = require('faker');
var mongoose = require('mongoose')
var Rating = require('../models/rating')
var Station = require('../models/station')

mongoose.connect('mongodb://localhost:27017/travel-hacker-app');


var station1 = new Station({
  name: "Vauxhall"
})

var station2 = new Station({
  name: "Paddington"
})

var station3 = new Station({
  name: "Edgware Road"
})

var station4 = new Station({
  name: "Marylbone"
})

var station5 = new Station({
  name: "Baker Street"
})

var station6 = new Station({
  name: "Regent's Park"
})

var station7 = new Station({
  name: "Oxford Circus"
})

var station8 = new Station({
  name: "Picadilly Circus"
})

var station9 = new Station({
  name: "Charing Cross"
})

var station10 = new Station({
  name: "Embankment"
})

station1.ratings.push({
  rate: 7,
  timeSlot: 845,
  dayOfWeek: 'Monday'
})

station1.ratings.push({
  rate: 8,
  timeSlot: 855,
  dayOfWeek: 'Monday'
})

station1.ratings.push({
  rate: 9,
  timeSlot: 850,
  dayOfWeek: 'Monday'
})

station1.ratings.push({
  rate: 10,
  timeSlot: 905,
  dayOfWeek: 'Tuesday'
})

station1.ratings.push({
  rate: 10,
  timeSlot: 905,
  dayOfWeek: 'Tuesday'
})

station1.ratings.push({
  rate: 9.5,
  timeSlot: 905,
  dayOfWeek: 'Monday'
})

station1.ratings.push({
  rate: 9,
  timeSlot: 905,
  dayOfWeek: 'Monday'
})
station1.ratings.push({
  rate: 9.5,
  timeSlot: 905,
  dayOfWeek: 'Tuesday'
})

station1.ratings.push({
  rate: 10,
  timeSlot: 905,
  dayOfWeek: 'Monday'
})

station1.ratings.push({
  rate: 10,
  timeSlot: 910,
  dayOfWeek: 'Monday'
})
station1.ratings.push({
  rate: 9,
  timeSlot: 910,
  dayOfWeek: 'Tuesday'
})


station1.ratings.push({
  rate: 9.5,
  timeSlot: 910,
  dayOfWeek: 'Monday'
})
station1.ratings.push({
  rate: 9.5,
  timeSlot: 910,
  dayOfWeek: 'Tuesday'
})


station1.ratings.push({
  rate: 9.5,
  timeSlot: 910,
  dayOfWeek: 'Monday'
})

station1.ratings.push({
  rate: 10,
  timeSlot: 915,
  dayOfWeek: 'Monday'
})


station1.ratings.push({
  rate: 10,
  timeSlot: 915,
  dayOfWeek: 'Monday'
})

station1.ratings.push({
  rate: 9.5,
  timeSlot: 915,
  dayOfWeek: 'Tuesday'
})

station1.ratings.push({
  rate: 9,
  timeSlot: 915,
  dayOfWeek: 'Tuesday'
})

station1.ratings.push({
  rate: 10,
  timeSlot: 920,
  dayOfWeek: 'Monday'
})

station1.ratings.push({
  rate: 9,
  timeSlot: 920,
  dayOfWeek: 'Monday'
})
station1.ratings.push({
  rate: 9,
  timeSlot: 920,
  dayOfWeek: 'Tuesday'
})

station1.ratings.push({
  rate: 9,
  timeSlot: 920,
  dayOfWeek: 'Tuesday'
})
station1.ratings.push({
  rate: 8.5,
  timeSlot: 925,
  dayOfWeek: 'Monday'
})
station1.ratings.push({
  rate: 9,
  timeSlot: 925,
  dayOfWeek: 'Monday'
})

station1.ratings.push({
  rate: 9,
  timeSlot: 925,
  dayOfWeek: 'Tuesday'
})

station1.ratings.push({
  rate: 8,
  timeSlot: 925,
  dayOfWeek: 'Tuesday'
})

station1.ratings.push({
  rate: 7,
  timeSlot: 930,
  dayOfWeek: 'Tuesday'
})
station1.ratings.push({
  rate: 7,
  timeSlot: 930,
  dayOfWeek: 'Monday'
})
station1.ratings.push({
  rate: 8,
  timeSlot: 930,
  dayOfWeek: 'Monday'
})
station1.ratings.push({
  rate: 7.5,
  timeSlot: 930,
  dayOfWeek: 'Tuesday'
})

station1.ratings.push({
  rate: 7,
  timeSlot: 935,
  dayOfWeek: 'Monday'
})
station1.ratings.push({
  rate: 6.5,
  timeSlot: 935,
  dayOfWeek: 'Tuesday'
})

station1.ratings.push({
  rate: 6.5,
  timeSlot: 940,
  dayOfWeek: 'Tuesday'
})
station1.ratings.push({
  rate: 7,
  timeSlot: 940,
  dayOfWeek: 'Monday'
})

station1.ratings.push({
  rate: 6,
  timeSlot: 945,
  dayOfWeek: 'Tuesday'
})

station1.ratings.push({
  rate: 6.5,
  timeSlot: 945,
  dayOfWeek: 'Tuesday'
})

station1.ratings.push({
  rate: 6.0,
  timeSlot: 945,
  dayOfWeek: 'Monday'
})

station1.ratings.push({
  rate: 6.0,
  timeSlot: 945,
  dayOfWeek: 'Monday'
})

station1.save(function(err,station){
  if(err) console.log(err)
    console.log('station1 saved', station)
})

station2.ratings.push({
  rate: 8,
  timeSlot: 915,
  dayOfWeek: 'Tuesday'
})

station2.ratings.push({
  rate: 9,
  timeSlot: 905,
  dayOfWeek: 'Tuesday'
})

station2.ratings.push({
  rate: 9,
  timeSlot: 910,
  dayOfWeek: 'Tuesday'
})

station2.ratings.push({
  rate: 10,
  timeSlot: 920,
  dayOfWeek: 'Tuesday'
})

station2.ratings.push({
  rate: 8,
  timeSlot: 905,
  dayOfWeek: 'Tuesday'
})

station2.ratings.push({
  rate: 9,
  timeSlot: 905,
  dayOfWeek: 'Tuesday'
})

station2.ratings.push({
  rate: 8,
  timeSlot: 925,
  dayOfWeek: 'Tuesday'
})

station2.ratings.push({
  rate: 7.5,
  timeSlot: 930,
  dayOfWeek: 'Tuesday'
})

station2.ratings.push({
  rate: 7,
  timeSlot: 935,
  dayOfWeek: 'Tuesday'
})

station2.ratings.push({
  rate: 7,
  timeSlot: 940,
  dayOfWeek: 'Tuesday'
})

station2.ratings.push({
  rate: 7,
  timeSlot: 945,
  dayOfWeek: 'Tuesday'
})

station2.ratings.push({
  rate: 7,
  timeSlot: 925,
  dayOfWeek: 'Tuesday'
})

station2.ratings.push({
  rate: 9,
  timeSlot: 920,
  dayOfWeek: 'Tuesday'
})

station2.ratings.push({
  rate: 10,
  timeSlot: 915,
  dayOfWeek: 'Tuesday'
})

station2.ratings.push({
  rate: 9.5,
  timeSlot: 910,
  dayOfWeek: 'Tuesday'
})

station2.ratings.push({
  rate: 6.5,
  timeSlot: 945,
  dayOfWeek: 'Tuesday'
})

station2.ratings.push({
  rate: 7,
  timeSlot: 930,
  dayOfWeek: 'Tuesday'
})

station1.save(function(err,station){
  if(err) console.log(err)
    console.log('station1 saved', station)
})

station2.save(function(err,station){
  if(err) console.log(err)
    console.log('station2 saved', station)
})

station3.save(function(err,station){
  if(err) console.log(err)
    console.log('station3 saved', station)
})
station4.save(function(err,station){
  if(err) console.log(err)
    console.log('station4 saved', station)
})
station5.save(function(err,station){
  if(err) console.log(err)
    console.log('station5 saved', station)
})
station6.save(function(err,station){
  if(err) console.log(err)
    console.log('station6 saved', station)
})

station7.save(function(err,station){
  if(err) console.log(err)
    console.log('station7 saved', station)
})
station8.save(function(err,station){
  if(err) console.log(err)
    console.log('station8 saved', station)
})
station9.save(function(err,station){
  if(err) console.log(err)
    console.log('station9 saved', station)
})
station10.save(function(err,station){
  if(err) console.log(err)
    console.log('station10 saved', station)
})

