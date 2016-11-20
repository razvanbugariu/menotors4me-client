'use strict';

angular
	.module('mentors4me')
	.controller('homeController', homeController);

function homeController($scope, $location, $rootScope, mentorService) {
	$rootScope.loggedIn = false;
}
