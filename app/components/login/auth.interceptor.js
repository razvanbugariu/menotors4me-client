angular.module('mentors4me').factory('authInterceptor',['$q','$location', '$rootScope', '$window', '$cookies' ,function($q, $location, $rootScope, $window, $cookies){
	return {
		'request': function(config) {
				console.log("interceptors");
			  config.headers['Authorization']=$cookies.get("authentication");
			  config.headers['X-Requested-With'] = 'XMLHttpRequest';
				console.log(config.headers['Authorization']);
		      return config;
		    },

		responseError: function (rejection){
			if(rejection && rejection.status === 401){
				$cookies.remove("authentication");
				$location.path('/login');
			}
			return $q.reject(rejection)

		}
	};
}]).config(['$httpProvider',function($httpProvider){
	$httpProvider.interceptors.push('authInterceptor');
}]);
