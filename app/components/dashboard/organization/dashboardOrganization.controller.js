'use strict';

angular
	.module('mentors4me')
	.controller('dashboardOrganizationController', dashboardOrganizationController);

function dashboardOrganizationController($scope, $location, dashboardOrganizationService) {

	$scope.pendingContexts = [];
	$scope.acceptedContexts = [];

	function getPendingContexts(){
		dashboardOrganizationService.getPendingContexts().then(handleGetPendingCtxSuccess, handleGetPendingCtxError);
	}

	function handleGetPendingCtxSuccess(response){
		$scope.pendingContexts = response.data.data;
	}

	function handleGetPendingCtxError(responseError){
		console.log(responseError);
	}

	function getAcceptedContexts(){
		dashboardOrganizationService.getAcceptedContexts().then(handleGetAcceptedCtxSuccess, handleGetAcceptedCtxError);
	}

	function handleGetAcceptedCtxSuccess(response){
		$scope.acceptedContexts = response.data.data;
	}

	function handleGetAcceptedCtxError(responseError){
		console.log(responseError);
	}

getPendingContexts();
getAcceptedContexts();

}
