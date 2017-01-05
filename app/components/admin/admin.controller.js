'use strict';

angular
	.module('mentors4me')
	.controller('adminController', adminController);

function adminController($scope, $location, $cookies, adminService) {
  $scope.proposals = [] ;
	$scope.approveMentor = approveMentor;
	$scope.rejectMentor = rejectMentor;


	function getPendingProposals(){
		adminService.getPendingProposals($cookies.get('authentication')).then(handleGetProposalsSuccess, handleGetProposalsError);
	}
	// api/invitations/ - POST (emailul userului - body ) api/invitation/reject(la fel)
	function approveMentor(proposal){
		// deleteFromProposals(proposal);
		adminService.approveMentor(proposal.id, $cookies.get('authentication')).then(handleApproveSuccess, handleApproveError);
	}

	function rejectMentor(proposal){
		// deleteFromProposals(proposal);
		adminService.rejectMentor(proposal.id, $cookies.get('authentication')).then(handleRejectSuccess, handleRejectError);
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
		console.log("Error");
	}

	function handleRejectSuccess(response){
		getPendingProposals();
	}

	function handleRejectError(responseError){
		console.log("Error");
	}

	function handleGetProposalsError(responseError){
		console.log("ERROR")
	}

	getPendingProposals();

}