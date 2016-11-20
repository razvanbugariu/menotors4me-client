'use strict'

angular
	.module('mentors4me')
	.factory('adminService', ['$http', function($http) {
		var adminService = {};
		var URL = "https://mentors4me-api.herokuapp.com/";
		adminService.getAllContexts = function(token){
			var req = {
							 method: 'GET',
							 url: URL + "api/contexts",
							 headers: {
								 'Authorization': token
							 },
							};
			return $http(req);
		}

		return adminService;
	}

	]);
