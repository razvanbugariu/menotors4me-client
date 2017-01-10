'use strict';

angular
	.module('mentors4me')
	.controller('dashboardAdminController', dashboardAdminController);

function dashboardAdminController($scope, $location, $cookies, dashboardAdminService) {
  $scope.proposals = [] ;
	$scope.approveMentor = approveMentor;
	$scope.rejectMentor = rejectMentor;


	function getPendingProposals(){
		dashboardAdminService.getPendingProposals($cookies.get('token')).then(handleGetProposalsSuccess, handleGetProposalsError);
	}
	function approveMentor(proposal){
		dashboardAdminService.approveMentor(proposal.id, $cookies.get('token')).then(handleApproveSuccess, handleApproveError);
	}

	function rejectMentor(proposal){
		dashboardAdminService.rejectMentor(proposal.id, $cookies.get('token')).then(handleRejectSuccess, handleRejectError);
	}

	function deleteFromProposals(proposal){
		$scope.proposals.remove(proposal);
	}

	function handleGetProposalsSuccess(response){
		$scope.proposals = response.data.data;
	}

	function handleApproveSuccess(response){
		getPendingProposals();
	}

	function handleApproveError(responseError){
		console.log(responseError);
	}

	function handleRejectSuccess(response){
		getPendingProposals();
	}

	function handleRejectError(responseError){
		console.log(responseError);
	}

	function handleGetProposalsError(responseError){
		console.log(responseError);
	}

	getPendingProposals();

}
