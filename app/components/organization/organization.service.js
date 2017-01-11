'use strict'

angular
	.module('mentors4me')
	.factory('organizationService', function($http, Constants, $cookies) {
		var organizationService = {};

    organizationService.getAllOrganizations = function(){
      var req = {
               method: 'GET',
               url: Constants.DOMAIN + Constants.ORGANIZATIONS,
               headers: {
                 'Authorization': $cookies.get("token")
               },
              };
      return $http(req);
    }

		return organizationService;
	}

	);
