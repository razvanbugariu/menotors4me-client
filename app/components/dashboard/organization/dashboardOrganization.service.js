'use strict'

angular
  .module('mentors4me')
  .factory('dashboardOrganizationService', function(dashboardService) {
      var dashboardOrganizationService = {};

      dashboardOrganizationService.getAcceptedContexts = function() {
        return dashboardService.getAcceptedContexts();
      }

      dashboardOrganizationService.getPendingContexts = function() {
        return dashboardService.getPendingContexts();
      }

      return dashboardOrganizationService;
    }

  );
