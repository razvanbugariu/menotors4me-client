'use strict'

angular
  .module('mentors4me')
  .factory('mentorService', function($http, Constants, authorizationService, $cookies, contextsService) {
      var mentorService = {};

      mentorService.getAllMentors = function() {
        return $http.get(Constants.DOMAIN + Constants.API + Constants.MENTORS);
      };

      mentorService.getMentorById = function(mentorId) {
        return $http.get(Constants.DOMAIN + Constants.API + Constants.MENTORS + "/" + mentorId);
      };

      mentorService.inviteToEvent = function(context, token) {
        return contextsService.inviteToEvent(context);
      };

      mentorService.checkIfMentor = function() {
        return authorizationService.isMentor();
      };

      mentorService.getMentorsByStatus = function(status) {
        return $http.get(Constants.DOMAIN + Constants.API + Constants.MENTORS + Constants.FILTER_BY_STATUS + status);
      }

      return mentorService;
    }

  );
