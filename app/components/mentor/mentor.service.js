'use strict'

angular
	.module('mentors4me')
	.factory('mentorService', function($http, Constants, authorizationService) {
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

		mentorService.checkIfMentor = function(){
			return authorizationService.isMentor();
		}

		return mentorService;
	}

	);
