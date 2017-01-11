'use strict'

angular
	.module('mentors4me')
	.factory('editOrganizationService', function($http, Constants, $cookies) {
		var editOrganizationService = {};

		editOrganizationService.getCurrentOrganization = function(){
			return $http.get(Constants.DOMAIN + Constants.ORGANIZATIONS + "/" +  $cookies.get("userId"));
		}

		editOrganizationService.updateOrganization = function(organization){
			var req = {
							 method: 'PUT',
							 url: Constants.DOMAIN + Constants.ORGANIZATIONS + "/" +  $cookies.get("userId"),
							 headers: {
								 'Authorization': $cookies.get("token")
							 },
							 data: organization
							};
			return $http(req);
		}

		return editOrganizationService;
	}

	);
