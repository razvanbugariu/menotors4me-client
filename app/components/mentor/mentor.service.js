'use strict'

angular
	.module('mentors4me')
	.factory('mentorService', ['$http', 'Constants', function($http, Constants) {
		var mentorService = {};

		mentorService.getAllMentors = function(){
			return $http.get(Constants.DOMAIN + Constants.API + Constants.MENTORS);
		};

		mentorService.getMentorById = function(mentorId){
			return $http.get(Constants.DOMAIN + Constants.API  + Constants.MENTORS + "/" + mentorId);
		};

		mentorService.proposeMentor = function(proposal){
			return $http.post(Constants.DOMAIN + Constants.PROPOSALS, proposal);
		};

		//Authorization, profile_id(id mentorului), organization id(user.orgID), description
		mentorService.inviteToEvent = function(context, token){
			var req = {
							 method: 'POST',
							 url: Constants.DOMAIN + "/api/contexts",
							 headers: {
								 'Authorization': token
							 },
							 data : context
							};
			return $http(req);
		}

		return mentorService;
	}

	]);
