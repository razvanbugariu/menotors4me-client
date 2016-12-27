'use strict'

angular
	.module('mentors4me')
	.factory('mentorService', ['$http', function($http) {
		var mentorService = {};
		var URL = "https://mentors4me-api.herokuapp.com/";

		mentorService.getAllMentors = function(){
			return $http.get(URL + "/api/mentors");
		};

		mentorService.getMentorById = function(mentorId){
			return $http.get(URL + "/api/users/" + mentorId);
		};

		mentorService.proposeMentor = function(proposal){
			return $http.post(URL + "api/mentors/propose", proposal);
		};

		mentorService.proposeMentorUpdate = function(token, proposal){
			return $http.put(URL + "api/mentors/propose", proposal);
		};
		//Authorization, profile_id(id mentorului), organization id(user.orgID), description
		mentorService.inviteToEvent = function(body, token){
			var req = {
							 method: 'POST',
							 url: URL + "api/context",
							 headers: {
								 'Authorization': token
							 },
							 data : body
							};
			return $http(req);
		}

		return mentorService;
	}

	]);
