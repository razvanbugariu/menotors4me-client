'use strict';

angular
  .module('mentors4me')
  .factory('contextsService', function($http, Constants, $cookies, dashboardService) {
    var contextsService = {};

    contextsService.inviteToEvent = function(context) {
      var req = {
        method: 'POST',
        url: Constants.DOMAIN + "/api/contexts",
        headers: {
          'Authorization': $cookies.get("token")
        },
        data: context
      };
      return $http(req);
    }

    contextsService.getContextById = function(contextId) {
      var req = {
        method: 'GET',
        url: Constants.DOMAIN + "/api/contexts/" + contextId,
        headers: {
          'Authorization': $cookies.get("token")
        },
      };
      return $http(req);
    }

    contextsService.getContexts = function() {
      return dashboardService.getAcceptedContexts();
    }

    return contextsService;
  });
