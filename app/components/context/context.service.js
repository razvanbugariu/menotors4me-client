'use strict';

angular
  .module('mentors4me')
  .factory('contextsService', function($http, Constants, $cookies, dashboardService) {
    var contextsService = {};

    contextsService.inviteToEvent = function(context) {
      var req = {
        method: 'POST',
        url: Constants.DOMAIN + Constants.API + Constants.CONTEXTS,
        headers: {
          'Authorization': $cookies.get(Constants.TOKEN)
        },
        data: context
      };
      return $http(req);
    }

    contextsService.getContextById = function(contextId) {
      var req = {
        method: 'GET',
        url: Constants.DOMAIN + Constants.API + Constants.CONTEXTS + "/" + contextId,
        headers: {
          'Authorization': $cookies.get(Constants.TOKEN)
        },
      };
      return $http(req);
    }

    contextsService.getContexts = function() {
      return dashboardService.getAcceptedContexts();
    }

    return contextsService;
  });
