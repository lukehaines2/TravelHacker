// var faker = require('faker/locale/en_GB')
// var faker = require('faker');
var mongoose = require('mongoose')
var Rating = require('../models/rating')
var Station = require('../models/station')

mongoose.connect('mongodb://localhost:27017/travel-hacker-app');


var station1 = new Station({
  name: "Vauxhall"
})

station1.ratings.push({
  rate: 7,
  timeSlot: 100,
  dayOfWeek: 'Tuesday'
})

station1.save(function(err,station){
  if(err) console.log(err)
    console.log('station1 saved', station)
})


var station2 = new Station({
  name: "Vauxhall"
})

station2.ratings.push({
  rate: 9,
  timeSlot: 98,
  dayOfWeek: 'Tuesday'
})

station2.save(function(err,station){
  if(err) console.log(err)
    console.log('station2 saved', station)
})

var station3 = new Station({
  name: "Vauxhall"
})

station3.ratings.push({
  rate: 9,
  timeSlot: 99,
  dayOfWeek: 'Tuesday'
})

station3.save(function(err,station){
  if(err) console.log(err)
    console.log('station3 saved', station)
})

var station4 = new Station({
  name: "Vauxhall"
})

station4.ratings.push({
  rate: 10,
  timeSlot: 101,
  dayOfWeek: 'Tuesday'
})

station4.save(function(err,station){
  if(err) console.log(err)
    console.log('station4 saved', station)
})

var station5 = new Station({
  name: "Vauxhall"
})

station5.ratings.push({
  rate: 8,
  timeSlot: 98,
  dayOfWeek: 'Tuesday'
})

station5.save(function(err,station){
  if(err) console.log(err)
    console.log('station5 saved', station)
})

var station6 = new Station({
  name: "Vauxhall"
})

station6.ratings.push({
  rate: 9,
  timeSlot: 98,
  dayOfWeek: 'Tuesday'
})

station6.save(function(err,station){
  if(err) console.log(err)
    console.log('station6 saved', station)
})


var station7 = new Station({
  name: "Vauxhall"
})

station7.ratings.push({
  rate: 8,
  timeSlot: 102,
  dayOfWeek: 'Tuesday'
})

station7.save(function(err,station){
  if(err) console.log(err)
    console.log('station7 saved', station)
})


var station8 = new Station({
  name: "Vauxhall"
})

station8.ratings.push({
  rate: 7.5,
  timeSlot: 103,
  dayOfWeek: 'Tuesday'
})

station8.save(function(err,station){
  if(err) console.log(err)
    console.log('station8 saved', station)
})


var station9 = new Station({
  name: "Vauxhall"
})

station9.ratings.push({
  rate: 7,
  timeSlot: 104,
  dayOfWeek: 'Tuesday'
})

station9.save(function(err,station){
  if(err) console.log(err)
    console.log('station9 saved', station)
})


var station10 = new Station({
  name: "Vauxhall"
})

station10.ratings.push({
  rate: 7,
  timeSlot: 105,
  dayOfWeek: 'Tuesday'
})

station10.save(function(err,station){
  if(err) console.log(err)
    console.log('station10 saved', station)
})


var station11 = new Station({
  name: "Vauxhall"
})

station11.ratings.push({
  rate: 7,
  timeSlot: 106,
  dayOfWeek: 'Tuesday'
})

station11.save(function(err,station){
  if(err) console.log(err)
    console.log('station11 saved', station)
})



// {
// "station_code": "OVL",
// "atcocode": "9400ZZLUOVL",
// "name": "Oval",
// "mode": "tube",
// "longitude": -0.11243,
// "latitude": 51.48185,
// "lines": [
// "northern"
// ],
// "distance": 1580
// },
// {
// "station_code": "STK",
// "atcocode": "9400ZZLUSKW",
// "name": "Stockwell",
// "mode": "tube",
// "longitude": -0.12264,
// "latitude": 51.47219,
// "lines": [
// "victoria",
// "northern"
// ],
// "distance": 1979
// },
// {
// "station_code": "KEN",
// "atcocode": "9400ZZLUKNG",
// "name": "Kennington",
// "mode": "tube",
// "longitude": -0.10596,
// "latitude": 51.48834,
// "lines": [
// "northern"
// ],
// "distance": 2478
// },
// {
// "station_code": "VIC",
// "atcocode": "9400ZZLUVIC",
// "name": "Victoria",
// "mode": "tube",
// "longitude": -0.1431,
// "latitude": 51.49636,
// "lines": [
// "circle",
// "district",
// "victoria"
// ],
// "distance": 3020
// },
// {
// "station_code": "SJP",
// "atcocode": "9400ZZLUSJP",
// "name": "St. Jame's Park",
// "mode": "tube",
// "longitude": -0.1336,
// "latitude": 51.49955,
// "lines": [
// "circle",
// "district"
// ],
// "distance": 3063
// },
// {
// "station_code": "CPN",
// "atcocode": "9400ZZLUCPN",
// "name": "Clapham North",
// "mode": "tube",
// "longitude": -0.13001,
// "latitude": 51.46514,
// "lines": [
// "northern"
// ],
// "distance": 3216
// },
// {
// "station_code": "LAM",
// "atcocode": "9400ZZLULBN",
// "name": "Lambeth North",
// "mode": "tube",
// "longitude": -0.11231,
// "latitude": 51.49881,
// "lines": [
// "bakerloo"
// ],
// "distance": 3238
// },
// {
// "station_code": "WMS",
// "atcocode": "9400ZZLUWSM",
// "name": "Westminster",
// "mode": "tube",
// "longitude": -0.12486,
// "latitude": 51.50132,
// "lines": [
// "circle",
// "district",
// "jubilee"
// ],
// "distance": 3281
// },
// {
// "station_code": "ELE",
// "atcocode": "9400ZZLUEAC",
// "name": "Elephant & Castle",
// "mode": "tube",
// "longitude": -0.1006,
// "latitude": 51.49454,
// "lines": [
// "northern",
// "bakerloo"
// ],
// "distance": 3545
// },
// {
// "station_code": "SSQ",
// "atcocode": "9400ZZLUSSQ",
// "name": "Sloane Square",
// "mode": "tube",
// "longitude": -0.15637,
// "latitude": 51.49227,
// "lines": [
// "circle",
// "district"
// ],
// "distance": 3715
// },
// {
// "station_code": "WLO",
// "atcocode": "9400ZZLUWLO",
// "name": "Waterloo",
// "mode": "tube",
// "longitude": -0.11478,
// "latitude": 51.5033,
// "lines": [
// "northern",
// "waterlooandcity",
// "bakerloo",
// "jubilee"
// ],
// "distance": 3857
// },
// {
// "station_code": "BRX",
// "atcocode": "9400ZZLUBXN",
// "name": "Brixton",
// "mode": "tube",
// "longitude": -0.11488,
// "latitude": 51.46262,
// "lines": [
// "victoria"
// ],
// "distance": 3865
// },
// {
// "station_code": "CPC",
// "atcocode": "9400ZZLUCPC",
// "name": "Clapham Common",
// "mode": "tube",
// "longitude": -0.13831,
// "latitude": 51.46175,
// "lines": [
// "northern"
// ],
// "distance": 4019
// },
// {
// "station_code": "EMB",
// "atcocode": "9400ZZLUEMB",
// "name": "Embankment",
// "mode": "tube",
// "longitude": -0.12266,
// "latitude": 51.50706,
// "lines": [
// "circle",
// "district",
// "northern",
// "bakerloo"
// ],
// "distance": 4323
// },
// {
// "station_code": "CHX",
// "atcocode": "9400ZZLUCHX",
// "name": "Charing Cross",
// "mode": "tube",
// "longitude": -0.12727,
// "latitude": 51.50741,
// "lines": [
// "bakerloo",
// "northern"
// ],
// "distance": 4365
// },
// {
// "station_code": "SWK",
// "atcocode": "9400ZZLUSWK",
// "name": "Southwark",
// "mode": "tube",
// "longitude": -0.1054,
// "latitude": 51.50429,
// "lines": [
// "jubilee"
// ],
// "distance": 4473
// },
// {
// "station_code": "HPC",
// "atcocode": "9400ZZLUHPC",
// "name": "Hyde Park Corner",
// "mode": "tube",
// "longitude": -0.15244,
// "latitude": 51.50304,
// "lines": [
// "piccadilly"
// ],
// "distance": 4602
// },
// {
// "station_code": "GPK",
// "atcocode": "9400ZZLUGPK",
// "name": "Green Park",
// "mode": "tube",
// "longitude": -0.14278,
// "latitude": 51.50695,
// "lines": [
// "piccadilly",
// "victoria",
// "jubilee"
// ],
// "distance": 4650
// },
// {
// "station_code": "PIC",
// "atcocode": "9400ZZLUPCC",
// "name": "Piccadilly Circus",
// "mode": "tube",
// "longitude": -0.13379,
// "latitude": 51.51005,
// "lines": [
// "bakerloo",
// "piccadilly"
// ],
// "distance": 4904
// },
// {
// "station_code": "BOR",
// "atcocode": "9400ZZLUBOR",
// "name": "Borough",
// "mode": "tube",
// "longitude": -0.09348,
// "latitude": 51.50127,
// "lines": [
// "northern"
// ],
// "distance": 4917
// },
// {
// "station_code": "KNB",
// "atcocode": "9400ZZLUKNB",
// "name": "Knightsbridge",
// "mode": "tube",
// "longitude": -0.1605,
// "latitude": 51.50167,
// "lines": [
// "piccadilly"
// ],
// "distance": 5047
// },
// {
// "station_code": "LSQ",
// "atcocode": "9400ZZLULSQ",
// "name": "Leicester Square",
// "mode": "tube",
// "longitude": -0.12842,
// "latitude": 51.51139,
// "lines": [
// "piccadilly",
// "northern"
// ],
// "distance": 5081
// },
// {
// "station_code": "TEM",
// "atcocode": "9400ZZLUTMP",
// "name": "Temple",
// "mode": "tube",
// "longitude": -0.11426,
// "latitude": 51.51101,
// "lines": [
// "circle",
// "district"
// ],
// "distance": 5191
// }
