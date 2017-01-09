'use strict'

angular
	.module('mentors4me')
	.factory('authorizationService', function($rootScope, USER_ROLES) {
		var authorizationService = {};

		authorizationService.isLoggedIn = function(){
			if(isNotUndefined($rootScope.token) && isNotEmpty($rootScope.token)){
				return true;
			}
			return false;
		}

		authorizationService.isMentor = function(){
			if(isNotUndefined($rootScope.userRoles[0]) && isNotEmpty($rootScope.userRoles[0]) && $rootScope.userRoles[0] === USER_ROLES.MENTOR){
				return true;
			}
			return false;
		}

		authorizationService.isAdmin = function(){
			if(isNotUndefined($rootScope.userRoles[0]) && isNotEmpty($rootScope.userRoles[0]) && $rootScope.userRoles[0] === USER_ROLES.ADMIN){
				return true;
			}
			return false;
		}

		authorizationService.isOrganization = function(){
			if(isNotUndefined($rootScope.userRoles[0]) && isNotEmpty($rootScope.userRoles[0]) && $rootScope.userRoles[0] === USER_ROLES.ORGANIZATION){
				return true;
			}
			return false;
		}

		function isNotUndefined(element){
			if(element != undefined){
				return true;
			}
			return false;
		}

		function isNotEmpty(element){
			if (element != ""){
				return true;
			}
			return false;
		}

		return authorizationService;
	}

	);
