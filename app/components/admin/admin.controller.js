'use strict';

angular
	.module('mentors4me')
	.controller('adminController', adminController);

function adminController($scope, $location, $cookies, adminService) {
  $scope.value = "AdminController";

	function muie(){
		adminService.getAllContexts($cookies.get('authentication')).then(a,b);
	}

	function a(response){
		console.log("ASASASA");
		console.log(response.data);
	}

	function b(responseError){
		console.log("ERROR")
	}

	muie();

}
