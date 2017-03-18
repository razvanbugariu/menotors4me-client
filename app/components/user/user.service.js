'use strict';

angular
  .module('mentors4me')
  .factory('userService', function($http, Constants, $cookies) {
    var userService = {};
    userService.getCurrentUser = function() {
      var req = {
        method: 'GET',
        url: Constants.DOMAIN + Constants.API + Constants.USERS + Constants.ME,
        headers: {
          'Authorization': $cookies.get(Constants.TOKEN)
        }
      };
      return $http(req);
    };

    userService.changeUserStatus = function(userId, futureStatus) {
      var req = {
        method: 'PUT',
        url: Constants.DOMAIN + Constants.API + Constants.USERS + "/" + userId + "/" + futureStatus,
        headers: {
          'Authorization': $cookies.get(Constants.TOKEN)
        }
      };
      return $http(req);
    };

    return userService;
  });
