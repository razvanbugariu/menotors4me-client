'use strict';

angular
  .module('mentors4me')
  .config(function($routeProvider, USER_ROLES){
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
      controller : 'mentorDetailsController',
      data: {
        authorizedRoles: [USER_ROLES.MENTOR, USER_ROLES.ORGANIZATION]
      }
    })
    .when('/login', {
      templateUrl : 'app/components/authentication/login.html',
      controller : 'loginController'
    })
    .when('/register', {
      templateUrl : 'app/components/register/register.html',
      controller : 'registerController'
    })
    .when('/dashboard',{
      templateUrl: 'app/components/dashboard/dashboard.html',
      controller: 'dashboardController',
      data: {
        authorizedRoles: [USER_ROLES.MENTOR, USER_ROLES.ORGANIZATION, USER_ROLES.ADMIN]
      }
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
    .when('/mentors/register/:token',{
      templateUrl:'app/components/mentor/createMentor.html',
      controller:'createMentorController'
    })
    .when('/notAuthorized',{
      templateUrl:'app/components/authorization/not.authorized.html',
    })
    .otherwise('/home');
  })
