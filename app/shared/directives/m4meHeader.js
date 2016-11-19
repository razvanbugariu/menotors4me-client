'use strict';
angular
	.module('mentors4me')
	.directive('m4meHeader', function() {
		return {
			restrict: "EA",
			templateUrl: "app/shared/templates/m4meHeader.html",
	        controller: function ($scope, $cookies, $location, $rootScope) {
	    }
		}
	});
