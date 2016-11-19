'use strict'

angular
	.module('mentors4me')
	.factory('registerService', ['$http', function($http) {
		var registerService = {};

    var URL = "https://mentors4me-api.herokuapp.com/";

		registerService.register = function(user){
			return $http.post(URL + "api/organizations" , user);
		}

		return registerService;
	}

	]);
