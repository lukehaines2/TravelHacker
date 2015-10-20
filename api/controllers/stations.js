var Post = require('../models/Station');

// GET
function getAll(request, response) {
  console.log('hello')
  // Station.find(function(error, posts) {
  //   if(error) response.json({message: 'Paco Could not find any post'});

  //   response.json({posts: posts});
  // }).select('-__v');
}

// POST
function createStation(request, response) {
  // var post = new Station(request.body);

  // post.save(function(error) {
  //   if(error) response.json({messsage: 'Could not create post b/c:' + error});
  //   response.json({post: post});
  // });
}

// GET
function getStation(request, response) {
  // var id = request.params.id;

  // Station.findById({_id: id}, function(error, post) {
  //   if(error) response.json({message: 'Could not find post b/c:' + error});
  //   response.json({post: post});
  // }).select('-__v');
}

function updateStation(request, response) {
  // var id = request.params.id;

  // Station.findById({_id: id}, function(error, post) {
  //   if(error) response.json({message: 'Could not find post b/c:' + error});
  //   if(request.body.title) post.title = request.body.title;
  //   if(request.body.author) post.start = request.body.author;
  //   if(request.body.url) post.end = request.body.url;

  //   post.points = post.points + 1;
    
  //   // if(request.body.points) post.points = request.body.points;   

  //   post.save(function(error) {
  //     if(error) response.json({messsage: 'Could not update post b/c:' + error});

  //     response.json({message: 'Paco Station successfully updated', post: post});
  //   });
  // }).select('-__v');
}

function removeStation(request, response) {
  // var id = request.params.id;

  // Station.remove({_id: id}, function(error) {
  //   if(error) response.json({message: 'Could not delete post b/c:' + error});

  //   response.json({message: 'Station successfully deleted'});
  // }).select('-__v');
}

module.exports = {
  getAll: getAll,
  createStation: createStation,
  getStation: getStation,
  updateStation: updateStation,
  removeStation: removeStation
}