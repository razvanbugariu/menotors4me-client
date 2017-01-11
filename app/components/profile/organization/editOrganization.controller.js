'use strict';

angular
	.module('mentors4me')
	.controller('editOrganizationController', editOrganizationController);

function editOrganizationController($scope, editOrganizationService, $location, Constants, $cookies) {

	$scope.updateOrganization = updateOrganization;
	$scope.edit = edit;

	function getCurrentOrganization(){
		editOrganizationService.getCurrentOrganization().then(handleGetCurrentUserSuccess, handleResponseError);
	}

	function handleGetCurrentUserSuccess(response){
		$scope.currentUser = response.data.data;
	}

	function updateOrganization(){
		editOrganizationService.updateOrganization($scope.currentUser).then(handleUpdateSuccess, handleResponseError);
	}

	function handleUpdateSuccess(){
		$location.path(Constants.ORGANIZATIONS + "/" + $cookies.get("userId") + Constants.EDIT);
	}

	function handleResponseError(responseError){
		console.log(responseError);
	}

	function edit(){
		var path = "/organizations" + "/" + $cookies.get("userId") + Constants.EDIT
		$location.path(path);
	}

	getCurrentOrganization();
}
