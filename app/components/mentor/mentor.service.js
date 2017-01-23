'use strict'

angular
	.module('mentors4me')
	.factory('mentorService', function($http, Constants, authorizationService, $cookies, contextsService) {
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
			return contextsService.inviteToEvent(context);
		}

		mentorService.checkIfMentor = function(){
			return authorizationService.isMentor();
		}

		mentorService.deleteMentor = function(mentorId){
			var req = {
               method: 'DELETE',
               url: Constants.DOMAIN +  Constants.API  + Constants.MENTORS + "/" + mentorId,
               headers: {
                 'Authorization': $cookies.get("token")
               },
              };
      return $http(req);
		}

		return mentorService;
	}

	);
