'use strict';

angular
	.module('mentors4me')
	.controller('homeController', homeController);

function homeController($scope, $location, mentorService) {
  $scope.value = "Heelooo Angulars";
}
