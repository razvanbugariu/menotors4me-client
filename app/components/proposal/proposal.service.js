'use strict';

angular
  .module('mentors4me')
  .factory('proposalService', function($http, Constants, $cookies, dashboardService, $q,authorizationService,userService) {
    var proposalService = {};

    proposalService.proposeMentor = function(proposal) {
      return $http.post(Constants.DOMAIN + Constants.API + Constants.PROPOSALS, proposal);
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

    proposalService.getProposalById = function(proposalId){
      var req = {
        method: 'GET',
        url: Constants.DOMAIN + Constants.API + Constants.PROPOSALS + "/" + proposalId,
        headers: {
          'Authorization': $cookies.get(Constants.TOKEN)
        }
      };
      return $http(req);
    }

    proposalService.approveMentor = function(id, token) {
      var req = {
        method: 'POST',
        url: Constants.DOMAIN + Constants.API + Constants.PROPOSALS + "/" + id + "/" + Constants.ACCEPT,
        headers: {
          'Authorization': token
        }
      };
      return $http(req);
    };

    proposalService.rejectMentor = function(id, token) {
      var req = {
        method: 'POST',
        url: Constants.DOMAIN + Constants.API + Constants.PROPOSALS + "/" + id + "/" + Constants.REJECT,
        headers: {
          'Authorization': token
        }
      };
      return $http(req);
    };

    return proposalService;
  });
