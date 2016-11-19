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
		return loginService;
	}

	]);
