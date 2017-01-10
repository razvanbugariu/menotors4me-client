'use strict';

angular
	.module('mentors4me')
	.controller('dashboardMentorController', dashboardMentorController);

function dashboardMentorController($scope, $location, dashboardMentorService) {

	$scope.accRejContexts = [];
	$scope.pendingContexts = [];

	$scope.acceptContext = acceptContext;
	$scope.declineContext = declineContext;

	function acceptContext(contextId){
		dashboardMentorService.acceptContext(contextId).then(handleAccDeclSuccess, handleAccDeclError);
	}

	function declineContext(contextId){
		dashboardMentorService.declineContext(contextId).then(handleAccDeclSuccess, handleAccDeclError);
	}

	function handleAccDeclSuccess(){
		getPendingContexts();
		getRejectedAndAcceptedContexts();
	}

	function handleAccDeclError(resposeError){
		console.log(resposeError);
	}

	function getPendingContexts(){
		dashboardMentorService.getPendingContexts().then(handleGetPendingCtxSuccess, handleGetPendingCtxError);
	}

	function handleGetPendingCtxSuccess(response){
		$scope.pendingContexts = response.data.data;
	}

	function handleGetPendingCtxError(responseError){
		console.log(responseError);
	}

	function getRejectedAndAcceptedContexts(){
		dashboardMentorService.getAcceptedContexts().then(handleGetContextsSuccess, handleGetContextsError);
		dashboardMentorService.getRejectedContexts().then(handleGetContextsSuccess, handleGetContextsError);
	}

	function handleGetContextsSuccess(response){
		$scope.accRejContexts = $scope.accRejContexts.concat(response.data.data);
	}

	function handleGetContextsError(responseError){
		console.log(responseError);
	}
	getPendingContexts();
	getRejectedAndAcceptedContexts();
}
