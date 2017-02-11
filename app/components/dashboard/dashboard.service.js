'use strict';

angular
  .module('mentors4me')
  .factory('dashboardService', function($http, Constants, $cookies) {
      var dashboardService = {};

      dashboardService.getAcceptedContexts = function() {
        return getContextsByStatus(Constants.ACCEPTED);
      };

      dashboardService.getPendingContexts = function() {
        return getContextsByStatus(Constants.PENDING);
      };

      dashboardService.getRejectedContexts = function() {
        return getContextsByStatus(Constants.REJECTED);
      };

      function getContextsByStatus(status) {
        var req = {
          method: 'GET',
          url: Constants.DOMAIN + Constants.API + Constants.CONTEXTS + Constants.FILTER_BY_STATUS + status,
          headers: {
            'Authorization': $cookies.get(Constants.TOKEN)
          },
        };
        return $http(req);
      }

      return dashboardService;
    }

  );
