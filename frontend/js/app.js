angular
  .module('TravelHackerApp', ['ui.router'])
  .constant('API', 'http://localhost:3000/api')
  .config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'home.html'
    })
  //   ,
  // $stateProvider // Order by Author
  //   .state('author', {
  //     url: '/author',
  //     templateUrl: 'author.html'
  //   }),
  // $stateProvider // Order by Date
  //   .state('new', {
  //     url: '/new',
  //     templateUrl: 'new.html'
  //   }),
  // $stateProvider // Order by Points
  //   .state('best', {
  //     url: '/best',
  //     templateUrl: 'best.html'
  //   }),
  // $stateProvider // To add new post
  //   .state('add', {
  //     url: '/add',
  //     templateUrl: 'add.html'
  //   }),
  // $stateProvider // To add new post
  //   .state('about', {
  //     url: '/about',
  //     templateUrl: 'about.html'
  //   })
};