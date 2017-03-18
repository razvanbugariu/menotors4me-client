'use strict';

angular
  .module('mentors4me')
  .factory('dashboardAdminService', function($http, Constants, mentorService, organizationService, proposalService, userService) {
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

      dashboardAdminService.deleteOrganization = function(organizationId) {
        return organizationService.deleteOrganization(organizationId);
      };
      dashboardAdminService.changeUserStatus = function(userId, futureStatus) {
        return userService.changeUserStatus(userId, futureStatus);
      }

      return dashboardAdminService;
    }
  );
