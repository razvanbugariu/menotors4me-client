'use strict';

angular
  .module('mentors4me')
  .factory('organizationService', function($http, Constants, $cookies) {
      var organizationService = {};

      organizationService.getAllOrganizations = function() {
        var req = {
          method: 'GET',
          url: Constants.DOMAIN + Constants.API + Constants.ORGANIZATIONS,
          headers: {
            'Authorization': $cookies.get(Constants.TOKEN)
          },
        };
        return $http(req);
      };

      organizationService.deleteOrganization = function(organizationId) {
        var req = {
          method: 'DELETE',
          url: Constants.DOMAIN + Constants.API + Constants.ORGANIZATIONS + "/" + organizationId,
          headers: {
            'Authorization': $cookies.get(Constants.TOKEN)
          },
        };
        return $http(req);
      };

      return organizationService;
    }

  );
