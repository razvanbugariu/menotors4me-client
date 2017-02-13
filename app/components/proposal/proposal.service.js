'use strict';

angular
  .module('mentors4me')
  .factory('proposalService', function($http, Constants, $cookies, dashboardService) {
    var proposalService = {};

    proposalService.proposeMentor = function(proposal) {
      return $http.post(Constants.DOMAIN + Constants.PROPOSALS, proposal);
    };

    return proposalService;
  });
