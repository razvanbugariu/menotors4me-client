'use strict';

angular
	.module('mentors4me')
	.controller('loginController', loginController);

function loginController($scope, $location, loginService, $rootScope, permissionService) {

  $scope.login = login;
  $scope.validateInputs = validateInputs;
	$scope.goToRegister = goToRegister;

	function goToRegister (){
		$location.path("/register");
	}

	function login(){
    var user = {
      email : $scope.user.email,
      password : $scope.user.password
    };
    loginService.login(user).then(handleLoginSuccess, handleLoginError);
  }

  function handleLoginSuccess(response){
    permissionService.saveToken(response.data.data.auth_token)
		$rootScope.loggedIn = true;
		permissionService.saveIsLoggedIn();
		loginService.getCurrentUser(permissionService.getToken()).then(handleCurrentUserSuccess, handleCurrentUserError);
	}

	function handleLoginError(reponseError){
			$scope.errorLoginMessage = responseError.data.errors;
	}

	function handleCurrentUserError(error){
		console.log(error);
	}

	function handleCurrentUserSuccess(response){
		var currentUser = response.data.data;
		$rootScope.userRole = currentUser.role;
		permissionService.saveUserRoles(currentUser.roles);
		permissionService.saveUserId(currentUser.id);
		notifyHeaderThatUserIsLoggedIn($rootScope.userRole);
		if(permissionService.getUserRoles[0] === 'mentor'){
			$location.path("/dashboard");
		} else if(permissionService.getUserRoles[0] === 'admin') {
			$location.path("/admin");
		} else {
			permissionService.saveOrganizationId(currentUser.organization_id)
			$location.path("/mentors");
		}
	}

	function handleLogoutSuccess(){
		permissionService.removeUserId();
		permissionService.removeUserRoles();
		permissionService.removeIsLoggedIn();
		permissionService.removeToken();
		permissionService.removeOrganizationId();
		$rootScope.loggedIn = false;
		$location.path("/home");
	}

	function handleLogoutError(error){
		console.log(error);
	}

	function logout(){
    var user = {
      email : $scope.user.email,
      password : $scope.user.password
    };
		var token = permissionService.getToken();
    loginService.logout(token).then(handleLogoutSuccess, handleLogoutError);
  }

  function validateInputs(){
    return true;
  }

	function notifyHeaderThatUserIsLoggedIn(userRole){
				$rootScope.$broadcast('user-loggedin', userRole);
	}

}
