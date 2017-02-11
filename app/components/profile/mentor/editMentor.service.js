'use strict';

angular
  .module('mentors4me')
  .factory('editMentorService', function($http, Constants, mentorService, $cookies, skillsService) {
      var editMentorService = {};

      editMentorService.getCurrentMentor = function() {
        return mentorService.getMentorById($cookies.get("userId"));
      };

      editMentorService.getSkills = function() {
        return skillsService.getAllSkills();
      };

      editMentorService.updateMentor = function(mentor) {
        var req = {
          method: 'PUT',
          url: Constants.DOMAIN + Constants.API + Constants.MENTORS + "/" + $cookies.get("userId"),
          headers: {
            'Authorization': $cookies.get("token")
          },
          data: mentor
        };
        return $http(req);
      };

      return editMentorService;
    }

  );
