'use strict';

angular
  .module('mentors4me')
  .factory('dashboardAdminService', function($http, Constants, mentorService, organizationService, proposalService) {
      var dashboardAdminService = {};
      dashboardAdminService.getPendingProposals = function(token) {
        return proposalService.getPendingProposals(token);
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
