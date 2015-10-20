angular.module('TravelHackerApp')
.controller('stationsController', stationsController);

stationsController.$inject = ['$http'];

function stationsController($http){


  console.log('I am the controller');
  
  var self = this;
  self.all = [];
  // self.addPost = addPost;
  // self.newPost = {};
  self.getStations = getStations;
  
  self.oneStation = {};
  self.getStation = getStation;
  // self.updateStation = updateStation;
  // self.deleteStation = deleteStation;

  getStations();

  function getStations(){
    console.log('gettting stations')
    $http
      .get('http://localhost:3000/stations')
      .then(function(response){
        self.all = response.data.stations;
    });
  }
//getStation(id);
  function getStation(id){
    console.log('getting one station')
    $http
      .get('http://localhost:3000/stations/' + id)
      .then(function(response){
        self.oneStation = response.data.station;
        console.log('station', self.oneStation.name);
    });
  }


  // function addStation(){
  //   $http
  //     .station('http://localhost:3000/posts', self.newPost)
  //     .then(function(response){
  //       getPosts();
  //   });
  //   self.newPost = {};
  // }

  // function updatePost(post){
  //   self.points = post.points + 1;
  //   console.log("self", self.points);
  //   $http
  //     .patch('http://localhost:3000/posts/' + post._id)
  //     .then(function(response){
  //       console.log(response)
  //       getPosts();
  //     });
  // }

  // function deletePost(post){
  //   $http
  //     .delete("http://localhost:3000/posts/" + post._id)
  //     .then(function(response){
  //       var index = self.all.indexOf(post);
  //       self.all.splice(index, 1);
  //     });
  // }








}