angular.module('mentors4me').factory('securityInterceptor',['$q','$location', '$rootScope', '$window' ,function($q, $location, $rootScope, $window){
	return {

		responseError: function (rejection){
			console.log("security interceptor")
			if(rejection && rejection.status === 401){
				if (rejection.config && rejection.config.url && rejection.config.url != 'user'){
					rejection.data = {message : "You are not authorized!"};
					$window.sessionStorage.removeItem("authenticatedUser");
					$location.path('/');
				} else {
					rejection.data = {message : "Wrong user name or password"};
				}
			}
			return $q.reject(rejection)

		}
	};
}]).config(['$httpProvider',function($httpProvider){
	$httpProvider.interceptors.push('securityInterceptor');
}]);
