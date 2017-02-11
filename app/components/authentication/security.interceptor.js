'use strict';
angular
  .module('mentors4me')
  .factory('securityInterceptor', function($q, $rootScope, AUTH_EVENTS, $location) {
    return {
      responseError: function(rejection) {
        if (rejection && rejection.status === 401) {
          $rootScope.$broadcast(AUTH_EVENTS.received401);
          $location.path("/login");
        }
        return $q.reject(rejection);
      }
    };
  }).config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('securityInterceptor');
  }]);
