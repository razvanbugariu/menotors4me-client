'use strict';

angular
	.module('mentors4me')
	.controller('loginController', loginController);

function loginController($scope, $location, $rootScope, AUTH_EVENTS, loginService, Constants) {

	$scope.errors = [];

  $scope.login = login;
	$scope.goToRegister = goToRegister;

	function goToRegister (){
		$location.path("/register");
	}

	function login(){
    var user = {
      email : $scope.user.email,
      password : $scope.user.password
    };
    loginService.login(user);
  }

	$rootScope.$on(AUTH_EVENTS.loginSuccess, function(event, args) {
		$location.path(args);
	});

	$rootScope.$on(AUTH_EVENTS.loginFailed, function(event, args) {
		$scope.errors = args;
	});

	$rootScope.$on(AUTH_EVENTS.logoutSuccess, function(event, args) {
		$location.path(Constants.HOME);
	});

}
