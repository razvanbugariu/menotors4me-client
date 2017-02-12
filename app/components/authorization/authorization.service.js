'use strict';

angular
  .module('mentors4me')
  .factory('authorizationService', function($cookies, USER_ROLES, Constants) {
      var authorizationService = {};

      authorizationService.isAuthorized = function(userRoles) {
        if (this.isLoggedIn() && userRoles.indexOf($cookies.get(Constants.USER_ROLE)) !== -1) {
          return true;
        }
        return false;
      }

      function isNotEmpty(element) {
        if (element !== Constants.EMPTY) {
          return true;
        }
        return false;
      }

      authorizationService.isLoggedIn = function() {
        if (!angular.isUndefined($cookies.get(Constants.TOKEN)) && isNotEmpty($cookies.token)) {
          return true;
        }
        return false;
      }

      authorizationService.isMentor = function() {
        if (!angular.isUndefined($cookies.get(Constants.TOKEN)) && isNotEmpty($cookies.get(Constants.USER_ROLE)) && $cookies.get(Constants.USER_ROLE) === USER_ROLES.MENTOR) {
          return true;
        }
        return false;
      }

      authorizationService.isAdmin = function() {
        if (!angular.isUndefined($cookies.get(Constants.TOKEN)) && isNotEmpty($cookies.get(Constants.USER_ROLE)) && $cookies.get(Constants.USER_ROLE) === USER_ROLES.ADMIN) {
          return true;
        }
        return false;
      }

      authorizationService.isOrganization = function() {
        if (!angular.isUndefined($cookies.get(Constants.USER_ROLE)) && isNotEmpty($cookies.get(Constants.USER_ROLE)) && $cookies.get(Constants.USER_ROLE) === USER_ROLES.ORGANIZATION) {
          return true;
        }
        return false;
      }

      return authorizationService;
    }
  );
