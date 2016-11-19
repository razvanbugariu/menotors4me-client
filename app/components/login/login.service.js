'use strict'

angular
	.module('mentors4me')
	.factory('loginService', ['$http', function($http) {
		var loginService = {};
    var URL = "https://mentors4me-api.herokuapp.com/";
    loginService.login = function(user){
      return $http.post(URL + "api/sessions" , user);
    }

		loginService.logout = function(token){
      return $http.delete(URL + "api/sessions/" + token);
    }

		loginService.getCurrentUser = function(token){
			var req = {
							 method: 'GET',
							 url: URL + "api/users/me",
							 headers: {
							   'Authorization': token
							 },
							};
			return $http(req);
		}

		return loginService;
	}

	]);
