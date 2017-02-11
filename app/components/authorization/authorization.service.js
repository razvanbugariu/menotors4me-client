'use strict';

angular
  .module('mentors4me')
  .factory('authorizationService', function($cookies, USER_ROLES) {
      var authorizationService = {};

      authorizationService.isAuthorized = function(userRoles) {
        if (this.isLoggedIn() && userRoles.indexOf($cookies.get("userRole")) !== -1) {
          return true;
        }
        return false;
      }

      function isNotEmpty(element) {
        if (element !== "") {
          return true;
        }
        return false;
      }

      authorizationService.isLoggedIn = function() {
        if (!angular.isUndefined($cookies.get("token")) && isNotEmpty($cookies.token)) {
          return true;
        }
        return false;
      }

      authorizationService.isMentor = function() {
        if (!angular.isUndefined($cookies.get("token")) && isNotEmpty($cookies.get("userRole")) && $cookies.get("userRole") === USER_ROLES.MENTOR) {
          return true;
        }
        return false;
      }

      authorizationService.isAdmin = function() {
        if (!angular.isUndefined($cookies.get("token")) && isNotEmpty($cookies.get("userRole")) && $cookies.get("userRole") === USER_ROLES.ADMIN) {
          return true;
        }
        return false;
      }

      authorizationService.isOrganization = function() {
        if (!angular.isUndefined($cookies.get("token")) && isNotEmpty($cookies.get("userRole")) && $cookies.get("userRole") === USER_ROLES.ORGANIZATION) {
          return true;
        }
        return false;
      }

      return authorizationService;
    }
  );
