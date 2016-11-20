'use strict';

angular
  .module('mentors4me')
  .config(function($routeProvider){
    $routeProvider.when('/home', {
      templateUrl : 'app/components/home/home.html',
      controller : 'homeController'
    })
    .when('/mentors', {
      templateUrl : 'app/components/mentor/mentor.html',
      controller : 'mentorController'
    })
    .when('/mentors/:mentorId', {
      templateUrl : 'app/components/mentor/mentordetails.html',
      controller : 'mentorDetailsController'
    })
    .when('/login', {
      templateUrl : 'app/components/login/login.html',
      controller : 'loginController'
    })
    .when('/register', {
      templateUrl : 'app/components/register/register.html',
      controller : 'registerController'
    })
    .when('/dashboard',{
      templateUrl: 'app/components/dashboard/dashboard.html',
      controller: 'dashboardController'
    })
    .when('/mentors/:mentorId/invite', {
      templateUrl : 'app/components/mentor/invitation.html',
      controller : 'mentorInvitationController'
    })
    .when('/mentors/:mentorId/edit', {
      templateUrl : 'app/components/mentor/edit.html',
      controller : 'mentorEditController'
    })
    .when('/propose', {
     templateUrl : 'app/components/mentor/proposal.html',
     controller : 'mentorProposalController'
   })
    .when('/admin',{
      templateUrl:'app/components/admin/admin.html',
      controller:'adminController'
    })
    .otherwise('/home');
  })
