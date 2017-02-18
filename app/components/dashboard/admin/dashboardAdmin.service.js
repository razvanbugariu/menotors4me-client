'use strict';

angular
  .module('mentors4me')
  .factory('dashboardAdminService', function($http, Constants, mentorService, organizationService) {
      var dashboardAdminService = {};
      dashboardAdminService.getPendingProposals = function(token) {
        var req = {
          method: 'GET',
          url: Constants.DOMAIN + Constants.API + Constants.PROPOSALS + Constants.FILTER_BY_STATUS + Constants.PENDING,
          headers: {
            'Authorization': token
          },
        };
        return $http(req);
      };

      dashboardAdminService.getAllMentors = function() {
        return mentorService.getAllMentors();
      };

      dashboardAdminService.getAllOrganizations = function() {
        return organizationService.getAllOrganizations();
      };

      dashboardAdminService.deleteMentor = function(mentorId) {
        return mentorService.deleteMentor(mentorId);
      };

      dashboardAdminService.deleteOrganization = function(organizationId) {
        return organizationService.deleteOrganization(organizationId);
      };

      return dashboardAdminService;
    }
  );
