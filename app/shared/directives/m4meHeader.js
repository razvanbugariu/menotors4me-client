'use strict';
angular
	.module('mentors4me')
	.directive('m4meHeader', function() {
		return {
			restrict: "EA",
			templateUrl: "app/shared/templates/m4meHeader.html",
	        controller: function ($scope, $cookies, $location, $rootScope, loginService, $window) {

						$scope.goToMentors = goToMentors;
						$scope.goToDashboard = goToDashboard;
						$scope.goToSuggesMentor = goToSuggesMentor;
						$scope.goToLogin = goToLogin;
						$scope.logout = logout;

						function goToMentors(){
							$location.path("/mentors");
						}

						function goToDashboard(){
							$location.path("/dashboard");
						}

						function goToSuggesMentor(){
							$location.path("/mentors");
						}

						function goToLogin(){
							$location.path("/login");
						}

						function logout(){
							loginService.logout($cookies.get("authentication")).then(handleLogoutSuccess, handleLogoutError);
						}

						function handleLogoutError(){

						};

						function handleLogoutSuccess(){
							$rootScope.loggedIn = false;
							$rootScope.userRole = undefined;
							$scope.showLogin = true;
							$cookies.remove("authentication")
							$window.localStorage.setItem("loggedIn", false);
							$location.path("/home")
						}

						$rootScope.$on('user-loggedin', function(event, args) {
								$scope.showLogin = false;
						});

						$scope.showLogin;

						function checkLoggedIn(){
							var isLoggedin = $cookies.get("authentication");
							if(isLoggedin === undefined){
								$scope.showLogin = true;
							} else {
								$scope.showLogin = false;}
						}
						checkLoggedIn();
	    }
		}
	});
