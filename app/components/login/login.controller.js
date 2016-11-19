'use strict';

angular
	.module('mentors4me')
	.controller('loginController', loginController);

function loginController($scope, $location, loginService, $cookies, $rootScope) {

  $scope.login = login;
  $scope.validateInputs = validateInputs;

  function handleLoginSuccess(response){
    $cookies.put("authentication", response.data.data.auth_token);
		$rootScope.loggedIn = true;
		$location.path("/mentor");
	}

	function handleLoginError(){
    $location.path("/login");
	}

  function login(){
    var user = {
      email : $scope.user.email,
      password : $scope.user.password
    };
    loginService.login(user).then(handleLoginSuccess, handleLoginError);
  }

	function handleLogoutSuccess(){
    $cookies.remove("authentication");
		$rootScope.loggedIn = false;
		$location.path("/home");
	}

	function handleLogoutError(){
	}

	function logout(){
    var user = {
      email : $scope.user.email,
      password : $scope.user.password
    };
		var token = $cookies.getObject("authentication");
    loginService.logout(token).then(handleLogoutSuccess, handleLogoutError);
  }

  function validateInputs(){
    return true;
  }

}
