'use strict';

angular
  .module('mentors4me')
  .factory('dashboardMentorService', function(dashboardService, $http, $cookies, Constants) {
    var dashboardMentorService = {};

    dashboardMentorService.getAcceptedContexts = function() {
      return dashboardService.getAcceptedContexts();
    }

    dashboardMentorService.getPendingContexts = function() {
      return dashboardService.getPendingContexts();
    }

    dashboardMentorService.getRejectedContexts = function() {
      return dashboardService.getRejectedContexts();
    }

    dashboardMentorService.acceptContext = function(contextId) {
      var req = {
        method: 'POST',
        url: Constants.DOMAIN + Constants.API + Constants.CONTEXTS + "/" + contextId + "/" + Constants.ACCEPT,
        headers: {
          'Authorization': $cookies.get(Constants.TOKEN)
        }
      };
      return $http(req);
    };

    dashboardMentorService.rejectContext = function(contextId) {
      var req = {
        method: 'POST',
        url: Constants.DOMAIN + Constants.API + Constants.CONTEXTS + "/" + contextId + "/" + Constants.REJECT,
        headers: {
          'Authorization': $cookies.get(Constants.TOKEN)
        }
      };
      return $http(req);
    };

    return dashboardMentorService;
  });
