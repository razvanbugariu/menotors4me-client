'use strict';
angular
  .module('mentors4me').run(function($rootScope, $location, authorizationService, Constants) {
    $rootScope.$on('$routeChangeStart', function(event, next) {
      if (!angular.isUndefined(next.$$route.data)) {
        var authorizedRoles = next.$$route.data.authorizedRoles;
        if (!authorizationService.isAuthorized(authorizedRoles)) {
          $location.path(Constants.NOT_AUTHORIZED);
        }
      }
    });
  });
