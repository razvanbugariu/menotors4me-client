'use strict'

angular
	.module('mentors4me')
	.factory('permissionService', ['$cookies', '$window', function($cookies, $window) {
		var permissionService = {};

    permissionService.saveUserRoles = function(userRoles) {
				$window.localStorage.setItem("userRole", userRoles);
		}

		permissionService.getUserRoles = function() {
				return $window.localStorage.getItem("userRole");
		}

		permissionService.removeUserRoles = function() {
			$window.localStorage.remove("userRole");
		}

		permissionService.saveIsLoggedIn = function() {
				$window.localStorage.setItem("loggedIn", true);
		}

		permissionService.getIsLoggedIn = function() {
				return $window.localStorage.getItem("loggedIn");
		}

		permissionService.removeIsLoggedIn = function() {
				$window.localStorage.remove("loggedIn");
		}

		permissionService.saveToken = function(token) {
			$cookies.put("authentication", token);
		}

		permissionService.getToken = function() {
			return $cookies.get("authentication");
		}

		permissionService.removeToken = function() {
			$cookies.remove("authentication");
		}

		permissionService.saveUserId = function(userId) {
				$window.localStorage.setItem("userId", userId);
		}

		permissionService.getUserId = function() {
				return $window.localStorage.getItem("userId");
		}

		permissionService.removeUserId = function() {
			$window.localStorage.remove("userId");
		}

		permissionService.saveOrganizationId = function(organizationId) {
				$window.localStorage.setItem("organizationId", organizationId);
		}

		permissionService.getOrganizationId = function() {
				return $window.localStorage.getItem("organizationId");
		}

		permissionService.removeOrganizationId = function() {
			$window.localStorage.remove("organizationId");
		}

		return permissionService;
	}

	]);
