angular.module('TravelHackerApp')
 .controller('selectStationsController', ['$scope', function($scope) {
   $scope.data = {
    inputSelectStation: null,
    availableOptions: [
      {id: '0', name: 'Select'},
      {id: '1', name: 'Vauxhall'},
      {id: '2', name: 'Paddington'},
      {id: '3', name: 'Blackhorse Road'}
    ],
   };
}]);