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
						$scope.goToSuggestMentor = goToSuggestMentor;
						$scope.goToLogin = goToLogin;
						$scope.logout = logout;
						$scope.goToProfile = goToProfile;

						function goToProfile (){
							$location.path("/mentors/" + $window.localStorage.getItem("userId"));
						}

						function goToMentors(){
							$location.path("/mentors");
						}

						function goToDashboard(){
							$location.path("/dashboard");
						}

						$scope.displayDashProfile;

						function checkDisplayDashboard(){
							var userRole = $window.localStorage.getItem("userRole");
							if(userRole === undefined || userRole === null){
								$scope.displayDashProfile = false;
							} else {
								if(userRole === 'normal' || userRole === 'mentor'){
									$scope.displayDashProfile = true;
								} else {
									$scope.displayDashProfile = false;
								}
							}
						}

						checkDisplayDashboard();

						function goToSuggestMentor(){
							$location.path("/propose");
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
							$window.localStorage.removeItem("userRole");
							$cookies.remove("authentication")
							$scope.displayDashProfile = false;
							$scope.isAdmin = false;
							$scope.notIsAdmin = true;
							$location.path("/home")
						}

						$rootScope.$on('user-loggedin', function(event, args) {
								$scope.showLogin = false;
								checkDisplayDashboard();
								checkLoggedIn();
								checkIsAdmin();
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

						$scope.isAdmin;
						$scope.notIsAdmin;

						function checkIsAdmin(){
								var userRole = $window.localStorage.getItem("userRole");
								if(userRole === 'admin'){
									$scope.isAdmin = true;
									$scope.notIsAdmin = false;
								} else {
									$scope.isAdmin = false;
									$scope.notIsAdmin = true;
								}
						}

						checkIsAdmin();

	    }
		}
	});
