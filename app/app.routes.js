'use strict';

angular
  .module('mentors4me')
  .config(function($routeProvider){
    console.log("ASASASASASASAFDFVD");
    $routeProvider.when('/', {
      templateUrl : 'app/components/home/home.html'
    })
    .when('/mentor', {
      templateUrl : 'app/components/mentor/mentor.html'
    })
    .when('/page2', {
      templateUrl : 'app/components/page2/page2.html'
    })
    .otherwise('/');
  })
