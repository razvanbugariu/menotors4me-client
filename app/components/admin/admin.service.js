'use strict'

angular
	.module('mentors4me')
	.factory('adminService', ['$http', 'Constants', function($http, Constants) {
		var adminService = {};
		adminService.getPendingProposals = function(token){
			var req = {
							 method: 'GET',
							 url: Constants.DOMAIN + Constants.PROPOSALS + Constants.STATUS_PENDING,
							 headers: {
								 'Authorization': token
							 },
							};
			return $http(req);
		}

		// api/invitations/ - POST (emailul userului - body ) api/invitation/reject(la fel)
		adminService.approveMentor = function (id, token){
			var req = {
							 method: 'POST',
							 url: Constants.DOMAIN + Constants.PROPOSALS + "/" + id + "/" + Constants.ACCEPT,
							 headers: {
								 'Authorization': token
							 }
							};
			return $http(req);
		}

		adminService.rejectMentor = function (id, token){
			var req = {
							 method: 'POST',
							 url: Constants.DOMAIN + Constants.PROPOSALS + "/" + id + "/" + Constants.REJECT,
							 headers: {
								 'Authorization': token
							 }
							};
			return $http(req);
		}

		return adminService;
	}

	]);
