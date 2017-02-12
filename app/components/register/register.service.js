'use strict';

angular
  .module('mentors4me')
  .factory('registerService', function($http, Constants) {
      var registerService = {};

      registerService.register = function(organization) {
        return $http.post(Constants.DOMAIN + Constants.API + Constants.ORGANIZATIONS, organization);
      };

      return registerService;
    }

  );
