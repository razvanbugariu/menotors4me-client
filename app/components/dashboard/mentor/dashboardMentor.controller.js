'use strict';

angular
	.module('mentors4me')
	.controller('dashboardMentorController', dashboardMentorController);

function dashboardMentorController($scope, $location, dashboardMentorService, growl) {

	$scope.errors = [];

	$scope.accRejContexts = [];
	$scope.pendingContexts = [];

	$scope.acceptContext = acceptContext;
	$scope.declineContext = declineContext;

	function acceptContext(contextId){
		dashboardMentorService.acceptContext(contextId).then(handleAccDeclSuccess, handleErrors);
	}

	function declineContext(contextId){
		dashboardMentorService.declineContext(contextId).then(handleAccDeclSuccess, handleErrors);
	}

	function handleAccDeclSuccess(){
		getPendingContexts();
		getRejectedAndAcceptedContexts();
	}

	function getPendingContexts(){
		dashboardMentorService.getPendingContexts().then(handleGetPendingCtxSuccess, handleErrors);
	}

	function handleGetPendingCtxSuccess(response){
		$scope.pendingContexts = response.data.data;
	}

	function getRejectedAndAcceptedContexts(){
		dashboardMentorService.getAcceptedContexts().then(handleGetContextsSuccess, handleErrors);
		dashboardMentorService.getRejectedContexts().then(handleGetContextsSuccess, handleErrors);
	}

	function handleGetContextsSuccess(response){
		$scope.accRejContexts = $scope.accRejContexts.concat(response.data.data);
	}

	function handleErrors(responseError){
		$scope.errors = responseError.data.errors;
	}

	$scope.goToDetails = function (selectedContext){
		if(selectedContext.status === 'accepted'){
			$location.path("/contexts/" + selectedContext.id);
		} else {
			growl.error("Faceti click pe un context cu status: accepted!");
		}
	}

	getPendingContexts();
	getRejectedAndAcceptedContexts();
}
