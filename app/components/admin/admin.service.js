'use strict'

angular
	.module('mentors4me')
	.factory('adminService', ['$http', function($http) {
		var adminService = {};
		var URL = "https://mentors4me-api.herokuapp.com/";
		adminService.getPendingProposals = function(token){
			var req = {
							 method: 'GET',
							 url: URL + "api/proposals?status=pending",
							 headers: {
								 'Authorization': token
							 },
							};
			return $http(req);
		}

		// api/invitations/ - POST (emailul userului - body ) api/invitation/reject(la fel)
		adminService.approveMentor = function (body, token){
			var req = {
							 method: 'POST',
							 url: URL + "api/invitations",
							 headers: {
								 'Authorization': token
							 },
							 data : body
							};
			return $http(req);
		}

		adminService.rejectMentor = function (body, token){
			var req = {
							 method: 'POST',
							 url: URL + "api/invitations/reject",
							 headers: {
								 'Authorization': token
							 },
							 data : body
							};
			return $http(req);
		}

		return adminService;
	}

	]);
