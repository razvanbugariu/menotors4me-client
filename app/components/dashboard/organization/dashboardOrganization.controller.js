'use strict';

angular
	.module('mentors4me')
	.controller('dashboardOrganizationController', dashboardOrganizationController);

function dashboardOrganizationController($scope, $location, dashboardOrganizationService) {

	$scope.errors = [];
	$scope.pendingContexts = [];
	$scope.acceptedContexts = [];

	function getPendingContexts(){
		dashboardOrganizationService.getPendingContexts().then(handleGetPendingCtxSuccess, handleErrors);
	}

	function handleGetPendingCtxSuccess(response){
		$scope.pendingContexts = response.data.data;
	}

	function handleErrors(responseError){
		$scope.errors = responseError.data.errors;
	}

	function getAcceptedContexts(){
		dashboardOrganizationService.getAcceptedContexts().then(handleGetAcceptedCtxSuccess, handleErrors);
	}

	function handleGetAcceptedCtxSuccess(response){
		$scope.acceptedContexts = response.data.data;
	}

	getPendingContexts();
	getAcceptedContexts();

}
