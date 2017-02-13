'use strict';
angular
  .module('mentors4me')
  .factory('securityInterceptor', function($q, $rootScope, AUTH_EVENTS, Constants, $location) {
    return {
      responseError: function(rejection) {
        if (rejection && rejection.status === 401) {
          $rootScope.$broadcast(AUTH_EVENTS.received401);
        }
        return $q.reject(rejection);
      }
    };
  }).config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('securityInterceptor');
  }]);
