angular.module('TravelHackerApp')
.controller('stationsController', stationsController);

stationsController.$inject = ['$http'];

function stationsController($http){


  console.log('I am the controller');
  
}