'use strict';
angular
	.module('mentors4me')
	.directive('m4meFooter', function() {
		return {
			restrict: "EA",
			templateUrl: "app/shared/templates/m4meFooter.html",
	        controller: function ($scope, $cookies, $location, $rootScope) {
	    }
		}
	});
