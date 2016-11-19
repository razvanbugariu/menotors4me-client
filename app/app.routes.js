'use strict';

angular
  .module('mentors4me')
  .config(function($routeProvider){
    $routeProvider.when('/home', {
      templateUrl : 'app/components/home/home.html',
      controller : 'homeController'
    })
    .when('/mentor', {
      templateUrl : 'app/components/mentor/mentor.html',
      controller : 'mentorController'
    })
    .when('/login', {
      templateUrl : 'app/components/login/login.html',
      controller : 'loginController'
    })
    .otherwise('/home');
  })
