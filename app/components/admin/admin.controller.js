'use strict';

angular
	.module('mentors4me')
	.controller('adminController', adminController);

function adminController($scope, $location, mentorService) {
  $scope.value = "AdminController";
}
