'use strict';

angular
  .module('mentors4me')
  .factory('proposalService', function($http, Constants, $cookies, dashboardService, $q,authorizationService,userService) {
    var proposalService = {};

    proposalService.proposeMentor = function(proposal) {
      return $http.post(Constants.DOMAIN + Constants.PROPOSALS, proposal);
    };

    proposalService.checkIfLoggedIn = function() {
        var defer =$q.defer();
        if(authorizationService.isLoggedIn()){
          defer.resolve();
        } else {
          defer.reject();
        }
        return defer.promise;
    }

    proposalService.getCurrentUser = function(){
      return userService.getCurrentUser($cookies.get(Constants.TOKEN));
    }

    return proposalService;
  });
