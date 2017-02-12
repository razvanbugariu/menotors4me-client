'use strict';

angular
  .module('mentors4me')
  .factory('editOrganizationService', function($http, Constants, $cookies) {
      var editOrganizationService = {};

      editOrganizationService.getCurrentOrganization = function() {
        var req = {
          method: 'GET',
          url: Constants.DOMAIN + Constants.API + Constants.ORGANIZATIONS + "/" + $cookies.get(Constants.USER_ID),
          headers: {
            'Authorization': $cookies.get(Constants.TOKEN)
          }
        };
        return $http(req);
      };

      editOrganizationService.updateOrganization = function(organization) {
        var req = {
          method: 'PUT',
          url: Constants.DOMAIN + Constants.API + Constants.ORGANIZATIONS + "/" + $cookies.get(Constants.USER_ID),
          headers: {
            'Authorization': $cookies.get(Constants.TOKEN)
          },
          data: organization
        };
        return $http(req);
      };

      return editOrganizationService;
    }

  );
