'use strict';

angular
  .module('mentors4me')
  .factory('editMentorService', function($http, Constants, mentorService, $cookies, skillsService) {
      var editMentorService = {};

      editMentorService.getCurrentMentor = function() {
        return mentorService.getMentorById($cookies.get(Constants.USER_ID));
      };

      editMentorService.getSkills = function() {
        return skillsService.getAllSkills();
      };

      editMentorService.updateMentor = function(mentor) {
        var req = {
          method: 'PUT',
          url: Constants.DOMAIN + Constants.API + Constants.MENTORS + "/" + $cookies.get(Constants.USER_ID),
          headers: {
            'Authorization': $cookies.get(Constants.TOKEN)
          },
          data: mentor
        };
        return $http(req);
      };

      return editMentorService;
    }

  );
