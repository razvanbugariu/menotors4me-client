'use strict';

angular
	.module('mentors4me')
	.controller('dashboardController', dashboardController);

function dashboardController($scope, $location, mentorService) {
  $scope.value = "DashboardController";
}
