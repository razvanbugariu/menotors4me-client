'use strict';

angular
  .module('mentors4me')
  .factory('skillsService', function($http, Constants) {
      var skillsService = {};
      skillsService.getAllSkills = function() {
        var req = {
          method: 'GET',
          url: Constants.DOMAIN + Constants.API + Constants.SKILLS,
        };
        return $http(req);
      };

      return skillsService;
    }

  );
