'use strict';

angular
	.module('mentors4me')
	.controller('dashboardOrganizationController', dashboardOrganizationController);

function dashboardOrganizationController($scope, $location, dashboardOrganizationService, growl) {

	$scope.errors = [];
	$scope.pendingContexts = [];
	$scope.acceptedContexts = [];
	$scope.goToDetails + goToDetails;

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

	function goToDetails(selectedContext){
		if(selectedContext.status === 'accepted'){
			$location.path("/contexts/" + selectedContext.id);
		} else {
			grow.info("Shaorma");
		}
	}

	getPendingContexts();
	getAcceptedContexts();

}
