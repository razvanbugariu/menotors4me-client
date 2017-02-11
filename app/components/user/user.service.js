'use strict';

angular
  .module('mentors4me')
  .factory('userService', ['$http', 'Constants', function($http, Constants) {
    var userService = {};
    userService.getCurrentUser = function(token) {
      var req = {
        method: 'GET',
        url: Constants.DOMAIN + Constants.API + Constants.USERS  + Constants.ME,
        headers: {
          'Authorization': token
        }
      };
      return $http(req);
    };
    return userService;
  }]);
