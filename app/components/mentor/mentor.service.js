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

		return mentorService;
	}

	]);
