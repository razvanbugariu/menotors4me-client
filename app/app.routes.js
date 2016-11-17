'use strict'

angular
  .module('mentors4me')
  .config('$locationProvider', '$routeProvider' ,function($locationProvider, $routeProvider){
    $locationProvider.hashPrefix('!');
    console.log("ASASASASASASAFDFVD");
    $routeProvider.when('/', {
      templateUrl : 'app/components/home/home.html'
    })
    .when('/page1', {
      templateUrl : 'app/components/page1/page1.html'
    })
    .when('/page2', {
      templateUrl : 'app/components/page2/page2.html'
    })
    .otherwise('/');
  })
