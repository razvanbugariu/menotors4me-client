'use strict'

angular
	.module('mentors4me')
	.factory('mentorService', ['$http', function($http) {
		var mentorService = {};
		var URL = "https://mentors4me-api.herokuapp.com/";
		mentorService.getAllMentors = function(){
			return $http.get(URL + "/api/mentors");
		}

		return mentorService;
	}

	]);
