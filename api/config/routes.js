var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');

var stationsController = require('../controllers/stations');

// http://127.0.0.1:3000/stations
router.route('/stations')

  //GET all stations
  .get(stationsController.getAll)

  //POST a new station
  .post(stationsController.createStation);


router.route('/stations/:id')

  // GET return specific station
  .get(stationsController.getStation)

  // PATCH update existing station
  .patch(stationsController.updateStation)

  // DELETE remove specific station from DB
  .delete(stationsController.removeStation);


module.exports = router