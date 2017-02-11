'use strict';

angular
  .module('mentors4me')
  .factory('skillsService', ['$http', function($http) {
      var skillsService = {};
      var URL = "https://mentors4me-api.herokuapp.com/";
      skillsService.getAllSkills = function() {
        var req = {
          method: 'GET',
          url: URL + "api/skills",
        };
        return $http(req);
      };

      return skillsService;
    }

  ]);
