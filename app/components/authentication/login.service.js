'use strict'

angular
	.module('mentors4me')
	.factory('loginService', function($http, userService, $rootScope, AUTH_EVENTS, USER_ROLES, Constants, $cookies) {
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
			$cookies.put("token", token);
		}

		function handleGetCurrentUserSuccess(response){
			var currentUser = response.data.data;
			saveUser(currentUser);
			notifyLoginSucces();
		}

		function saveUser(currentUser){
			$cookies.put("userId", currentUser.id);
			$cookies.put("userRole", currentUser.role[0]);
		}

		function notifyLoginSucces(){
			$rootScope.$broadcast(AUTH_EVENTS.loginSuccess, decideWhereToGoBasedOn($cookies.get("userRole")));
		}

		function decideWhereToGoBasedOn(role){
			if(role === USER_ROLES.ORGANIZATION){
				return Constants.MENTORS;
			} else {
				return Constants.DASHBOARD + "/" + role;
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

		loginService.logout = function(){
			var token = $cookies.get("token");
      $http.delete(Constants.DOMAIN + Constants.SESSIONS + "/" + token).then(handleLogoutSuccess, handleLogoutError);
    }

		function handleLogoutSuccess(){
			deleteUserData();
			notifyLogoutSuccess();
		}

		function notifyLogoutSuccess(){
			$rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
		}

		function deleteUserData(){
			$cookies.remove("userId");
			$cookies.remove("userRole");
			$cookies.remove("token");
		}

		function handleLogoutError(){
			notifyLogoutError();
		}

		function notifyLogoutError(){
			$rootScope.$broadcast(AUTH_EVENTS.logoutError);
		}

		return loginService;
	}

	);
