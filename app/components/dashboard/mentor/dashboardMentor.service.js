'use strict'

angular
	.module('mentors4me')
	.factory('dashboardMentorService', function(dashboardService, $http, $cookies, Constants) {
		var dashboardMentorService = {};

		dashboardMentorService.getAcceptedContexts = function(){
			return dashboardService.getAcceptedContexts();
		}

		dashboardMentorService.getPendingContexts = function(){
			return dashboardService.getPendingContexts();
		}

		dashboardMentorService.getRejectedContexts = function(){
			return dashboardService.getRejectedContexts();
		}

		dashboardMentorService.acceptContext = function(contextId){
			var req = {
							 method: 'POST',
							 url: Constants.DOMAIN + Constants.CONTEXTS + "/" + contextId + "/" + Constants.ACCEPT,
							 headers: {
								 'Authorization': $cookies.get("token")
							 }
						 };
			return $http(req);
		}

		dashboardMentorService.acceptContext = function(contextId){
			var req = {
							 method: 'POST',
							 url: Constants.DOMAIN + Constants.CONTEXTS + "/" + contextId + "/" + Constants.REJECT,
							 headers: {
								 'Authorization': $cookies.get("token")
							 }
							};
			return $http(req);
		}

		return dashboardMentorService;
	}
	);
