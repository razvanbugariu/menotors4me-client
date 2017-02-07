'use strict'
angular
	.module('mentors4me')
	.factory('securityInterceptor', function($q, $rootScope, AUTH_EVENTS){
		return {
			responseError: function (rejection){
				console.log("security interceptor")
				if(rejection && rejection.status === 401){
					$rootScope.$broadcast(AUTH_EVENTS.received401);
				}
				return $q.reject(rejection)
			}
		};
	}).config(['$httpProvider',function($httpProvider){
						$httpProvider.interceptors.push('securityInterceptor');
}]);
