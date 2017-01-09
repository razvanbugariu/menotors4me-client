'use strict'

angular
	.module('mentors4me')
	.factory('loginService', function($http, userService, $rootScope, AUTH_EVENTS, USER_ROLES, Constants) {
		var loginService = {};
    loginService.login = function(user){
      return $http.post(Constants.DOMAIN + Constants.SESSIONS , user).then(handleLoginSuccess, handleLoginError);
    }

		function handleLoginSuccess(response){
			return getCurrentUser(response.data.data.auth_token);
		}

		function getCurrentUser(token){
			saveToken(token);
			userService.getCurrentUser(token).then(handleGetCurrentUserSuccess, handleGetCurrentUserError);
		}

		function saveToken(token){
			$rootScope.token = token;
		}

		function handleGetCurrentUserSuccess(response){
			var currentUser = response.data.data;
			saveUser(currentUser);
			notifyLoginSucces();
		}

		function saveUser(currentUser){
			$rootScope.userId = currentUser.id;
			$rootScope.userRoles = currentUser.role;
		}

		function notifyLoginSucces(){
			$rootScope.$broadcast(AUTH_EVENTS.loginSuccess, decideWhereToGoBasedOn($rootScope.userRoles[0]));
		}

		function decideWhereToGoBasedOn(role){
			if(role === USER_ROLES.organization){
				return Constants.MENTORS;
			} else {
				return Constants.DASHBOARD;
			}

		}

		function handleLoginError(responseError){
			notifyLoginFail();
		}

		function handleGetCurrentUserError(responseError){
			notifyLoginFailed();
		}

		function notifyLoginFailed(){
			$rootScope.$broadcast(AUTH_EVENTS.loginFailed);
		}

		loginService.logout = function(token){
      $http.delete(Constants.DOMAIN + Constants.SESSIONS + "/" + $rootService.token).then(handleLogoutSuccess, handleLoginError);
    }

		function handleLogoutSuccess(){
			notifyLogoutSuccess();
			deleteUserData();
		}

		function notifyLogoutSuccess(){
			$rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
		}

		function deleteUserData(){
			$rootScope.userId = undefined;
			$rootScope.token = undefined;
			$rootScope.userRoles = undefined;
		}

		function handleLogoutError(){
			$rootScope.$broadcast(AUTH_EVENTS.logoutError);
		}

		return loginService;
	}

	);
