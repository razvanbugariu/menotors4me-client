'use strict';

angular
	.module('mentors4me')
	.controller('loginController', loginController);

function loginController($scope, $location, loginService) {

  $scope.login = login;
  $scope.validateInputs = validateInputs;

  function handleLoginSuccess(token){
    $cookies.put("authentication", token);
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

  function validateInputs(){
    return true;
  }

}
