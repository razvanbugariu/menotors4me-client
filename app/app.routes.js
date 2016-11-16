'use strict'

angular
  .module('mentors4me')
  .config(function($routerProvider){
    $routerProvider.when('/', {
      templateUrl : 'components/home/home.html'
      controller : 'components/home/home.controller.js'
    })
    .when('/page1', {
      templateUrl : 'components/page1/page1.html'
      controller : 'components/page1/page1.controller.js'
    })
    .when('/page2', {
      templateUrl : 'components/page2/page2.html'
      controller : 'components/page2/page2.controller.js'
    })
    .otherwise('/');
  })
