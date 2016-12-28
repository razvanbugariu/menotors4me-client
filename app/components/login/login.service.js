'use strict'

angular
	.module('mentors4me')
	.factory('loginService', ['$http','Constants', function($http, Constants) {
		var loginService = {};
    loginService.login = function(user){
      return $http.post(Constants.DOMAIN + Constants.SESSIONS , user);
    }

		loginService.logout = function(token){
      return $http.delete(Constants.DOMAIN + Constants.SESSIONS + "/" + token);
    }

		loginService.getCurrentUser = function(token){
			var req = {
							 method: 'GET',
							 url: Constants.DOMAIN + Constants.USERS + Constants.ME,
							 headers: {
							   'Authorization': token
							 }
							};
			return $http(req);
		}

		return loginService;
	}

	]);
