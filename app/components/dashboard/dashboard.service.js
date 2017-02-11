'use strict';

angular
  .module('mentors4me')
  .factory('dashboardService', function($http, Constants, $cookies) {
      var dashboardService = {};

      dashboardService.getAcceptedContexts = function() {
        return getContextsByStatus("accepted");
      };

      dashboardService.getPendingContexts = function() {
        return getContextsByStatus("pending");
      };

      dashboardService.getRejectedContexts = function() {
        return getContextsByStatus("rejected");
      };

      function getContextsByStatus(status) {
        var req = {
          method: 'GET',
          url: Constants.DOMAIN + Constants.CONTEXTS + Constants.FILTER_BY_STATUS + status,
          headers: {
            'Authorization': $cookies.get("token")
          },
        };
        return $http(req);
      }

      return dashboardService;
    }

  );
