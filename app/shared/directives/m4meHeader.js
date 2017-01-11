'use strict';
angular
	.module('mentors4me')
	.directive('m4meHeader', function() {
		return {
			restrict: "EA",
			templateUrl: "app/shared/templates/m4meHeader.html",
	        controller: function ($scope, $location, $rootScope, loginService, $cookies, Constants, AUTH_EVENTS, authorizationService) {

						$scope.isAuth = false;
						$scope.goToMentors = goToMentors;
						$scope.goToDashboard = goToDashboard;
						$scope.goToSuggestMentor = goToSuggestMentor;
						$scope.goToLogin = goToLogin;
						$scope.logout = logout;
						$scope.goToProfile = goToProfile;

						function goToProfile (){
							var path = "/" + $cookies.get("userRole") + "s/" + $cookies.get("userId");
							$location.path(path);
						}

						function goToMentors(){
							$location.path(Constants.MENTORS);
						}

						function goToDashboard(){
							$location.path(Constants.DASHBOARD + "/" + $cookies.get("userRole"));
						}

						function goToSuggestMentor(){
							$location.path(Constants.PROPOSE_MENTOR);
						}

						function goToLogin(){
							$location.path(Constants.LOGIN);
						}

						function logout(){
							loginService.logout();
						}

						$rootScope.$on(AUTH_EVENTS.loginSuccess, function(event, args) {
							checkIfIsLoggedIn();
						});

						$rootScope.$on(AUTH_EVENTS.logoutSuccess, function(event, args) {
							checkIfIsLoggedIn();
						});

						function checkIfIsLoggedIn() {
							$scope.isAuth = authorizationService.isLoggedIn();
						}

						checkIfIsLoggedIn();

	    }
		}
	});
