'use strict';

angular
	.module('mentors4me')
	.controller('loginController', loginController);

function loginController($scope, $location, loginService, $cookies, $rootScope, $window) {

  $scope.login = login;
  $scope.validateInputs = validateInputs;
	$scope.goToRegister = goToRegister;

	function goToRegister (){
		$location.path("/register");
	}


  function handleLoginSuccess(response){
    $cookies.put("authentication", response.data.data.auth_token);
		$rootScope.loggedIn = true;
		$window.localStorage.setItem("loggedIn", true);
		// $location.path("/mentors");
		loginService.getCurrentUser(response.data.data.auth_token).then(handleCurrentUserSuccess, handleCurrentUserError);
	}

	function handleCurrentUserError(){
		console.log("Error");
	}

	function handleCurrentUserSuccess(response){
		var currentUser = response.data.data;
		$rootScope.userRole = currentUser.role;
		$window.localStorage.setItem("userRole", currentUser.role);
		$window.localStorage.setItem("userId", currentUser.id);
		notifyHeaderThatUserIsLoggedIn($rootScope.userRole);
		if($rootScope.userRole === 'mentor'){
			$location.path("/dashboard");
		} else if($rootScope.userRole === 'admin') {
			$location.path("/admin");
		} else {
			$window.localStorage.setItem("organizationId", currentUser.organization_id);
			$location.path("/mentors");
		}
	}

	function handleLoginError(reponseError){
			$scope.errorLoginMessage = responseError.data.errors;
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
		$window.localStorage.remove("loggedIn");
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

	function notifyHeaderThatUserIsLoggedIn(userRole){
				$rootScope.$broadcast('user-loggedin', userRole);
	}

}
