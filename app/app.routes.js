'use strict';

angular
  .module('mentors4me')
  .config(function($routeProvider, $locationProvider, USER_ROLES) {
    $locationProvider.hashPrefix('');
    $routeProvider.when('/home', {
        templateUrl: 'app/components/home/home.html',
        controller: 'homeController'
      })
      .when('/mentors', {
        templateUrl: 'app/components/mentor/mentor.html',
        controller: 'mentorController'
      })
      .when('/contacts', {
        templateUrl: 'app/components/contacts/contact.html',
        controller: 'contactController'
      })
      .when('/profile/mentor/:mentorId', {
        templateUrl: 'app/components/mentor/mentorDetails.html',
        controller: 'mentorDetailsController',
      })
      .when('/profile/organization/:organizationId', {
        templateUrl: 'app/components/profile/organization/profile.html',
        controller: 'editOrganizationController',
        data: {
          authorizedRoles: [USER_ROLES.ORGANIZATION]
        }
      })
      .when('/login', {
        templateUrl: 'app/components/authentication/login.html',
        controller: 'loginController'
      })
      .when('/register', {
        templateUrl: 'app/components/register/organization/register.html',
        controller: 'registerOrganizationController'
      })
      .when('/mentors/:mentorId/invite', {
        templateUrl: 'app/components/mentor/invitation.html',
        controller: 'mentorDetailsController'
      })
      .when('/propose', {
        templateUrl: 'app/components/proposal/proposal.html',
        controller: 'proposalController'
      })
      .when('/proposals/:proposalId', {
        templateUrl: 'app/components/proposal/proposal.details.html',
        controller: 'proposalDetailsController',
        data: {
          authorizedRoles: [USER_ROLES.ADMIN]
        }
      })
      .when('/mentors/register/:token', {
        templateUrl: 'app/components/register/mentor/register.html',
        controller: 'registerMentorController'
      })
      .when('/dashboard/organization', {
        templateUrl: 'app/components/dashboard/organization/dashboardOrganization.html',
        controller: 'dashboardOrganizationController',
        data: {
          authorizedRoles: [USER_ROLES.ORGANIZATION]
        }
      })
      .when('/dashboard/admin', {
        templateUrl: 'app/components/dashboard/admin/dashboardAdmin.html',
        controller: 'dashboardAdminController',
        data: {
          authorizedRoles: [USER_ROLES.ADMIN]
        }
      })
      .when('/dashboard/mentor', {
        templateUrl: 'app/components/dashboard/mentor/dashboardMentor.html',
        controller: 'dashboardMentorController',
        data: {
          authorizedRoles: [USER_ROLES.MENTOR]
        }
      })
      .when('/profile/organization/:id/edit', {
        templateUrl: 'app/components/profile/organization/editProfile.html',
        controller: 'editOrganizationController',
        data: {
          authorizedRoles: [USER_ROLES.ORGANIZATION]
        }
      })
      .when('/profile/mentor/:id/edit', {
        templateUrl: 'app/components/profile/mentor/editProfile.html',
        controller: 'editMentorController',
        data: {
          authorizedRoles: [USER_ROLES.MENTOR]
        }
      })
      .when('/contexts/:id', {
        templateUrl: 'app/components/context/context.html',
        controller: 'contextController',
        data: {
          authorizedRoles: [USER_ROLES.ORGANIZATION, USER_ROLES.MENTOR]
        }
      })
      .when('/notAuthorized', {
        templateUrl: 'app/components/authorization/not.authorized.html',
      })
      .otherwise('/home');
  });
