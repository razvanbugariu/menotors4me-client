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
    .when('/mentors/:mentorId/invite', {
      templateUrl : 'app/components/mentor/invitation.html',
      controller : 'mentorDetailsController'
    })
    .when('/mentors/:mentorId/edit', {
      templateUrl : 'app/components/mentor/edit.html',
      controller : 'mentorEditController'
    })
    .when('/propose', {
     templateUrl : 'app/components/mentor/proposal.html',
     controller : 'mentorProposalController'
   })
    .when('/mentors/register/:token',{
      templateUrl:'app/components/mentor/createMentor.html',
      controller:'createMentorController'
    })
    .when('/dashboard/organization',{
      templateUrl:'app/components/dashboard/organization/dashboardOrganization.html',
      controller:'dashboardOrganizationController',
      data: {
        authorizedRoles: [USER_ROLES.ORGANIZATION]
      }
    })
    .when('/dashboard/admin',{
      templateUrl:'app/components/dashboard/admin/dashboardAdmin.html',
      controller:'dashboardAdminController',
      data: {
        authorizedRoles: [USER_ROLES.ADMIN]
      }
    })
    .when('/dashboard/mentor',{
      templateUrl:'app/components/dashboard/mentor/dashboardMentor.html',
      controller:'dashboardMentorController',
      data: {
        authorizedRoles: [USER_ROLES.MENTOR]
      }
    })
    .when('/notAuthorized',{
      templateUrl:'app/components/authorization/not.authorized.html',
    })
    .otherwise('/home');
  })
