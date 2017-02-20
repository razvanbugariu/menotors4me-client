'use strict';

angular
  .module('mentors4me')
  .factory('registerService', function($http, Constants) {
      var registerService = {};

      registerService.register = function(organization) {
        return $http.post(Constants.DOMAIN + Constants.API + Constants.ORGANIZATIONS, organization);
      };

      registerService.registerMentor = function(mentor, token) {
        var req = {
          method: 'POST',
          url: Constants.DOMAIN + Constants.API + Constants.MENTORS,
          headers: {
            'Authorization': token
          },
          data: mentor
        };
        return $http(req);
      }

      return registerService;
    }

  );
