'use strict';

angular
	.module('mentors4me')
	.controller('homeController', homeController);

function homeController($scope, $location, $rootScope, Constants) {
	$rootScope.loggedIn = false;
	console.log(Constants.DOMAIN);
}
