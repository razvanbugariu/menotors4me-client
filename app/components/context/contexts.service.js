'use strict'

angular
	.module('mentors4me')
	.factory('contextsService', function($http, Constants) {
		var contextsService = {};

		contextsService.inviteToEvent = function(context){
			var req = {
							 method: 'POST',
							 url: Constants.DOMAIN + "api/context",
							 headers: {
								 'Authorization': $cookies.get("token")
							 },
							 data : context
							};
			return $http(req);
		}
	return contextsService;
	}
	);
