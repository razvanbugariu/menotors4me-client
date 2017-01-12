'use strict';

angular
	.module('mentors4me')
	.controller('dashboardAdminController', dashboardAdminController);

function dashboardAdminController($scope, $location, $cookies, dashboardAdminService) {

	$scope.mentors = []
	$scope.organizations = [];
  $scope.proposals = [] ;
	$scope.errors = [];

	$scope.approveMentor = approveMentor;
	$scope.rejectMentor = rejectMentor;
	$scope.deleteOrganization = deleteOrganization;
	$scope.deleteMentor = deleteMentor;


	function getPendingProposals(){
		dashboardAdminService.getPendingProposals($cookies.get('token')).then(handleGetProposalsSuccess, handleError);
	}
	function approveMentor(proposal){
		dashboardAdminService.approveMentor(proposal.id, $cookies.get('token')).then(handleApproveSuccess, handleError);
	}

	function rejectMentor(proposal){
		dashboardAdminService.rejectMentor(proposal.id, $cookies.get('token')).then(handleRejectSuccess, handleError);
	}

	function deleteFromProposals(proposal){
		$scope.proposals.remove(proposal);
	}

	function handleGetProposalsSuccess(responseData){
		$scope.proposals = responseData.data.data;
	}

	function handleApproveSuccess(response){
		getPendingProposals();
	}

	function handleRejectSuccess(response){
		getPendingProposals();
	}

	function getAllMentors(){
		dashboardAdminService.getAllMentors().then(handleGetMentorsSuccess, handleError);
	}

	function handleError(responseError){
		$scope.errors = responseError.data.errors;
	}

	function handleGetMentorsSuccess(responseData){
		$scope.mentors = responseData.data.data;
	}

	function getAllOrganizations(){
		dashboardAdminService.getAllOrganizations().then(handleGetOrganizationsSuccess, handleError);
	}

	function handleGetOrganizationsSuccess(responseData){
		$scope.organizations = responseData.data.data;
	}

	function deleteMentor(mentorId){
		dashboardAdminService.deleteMentor(mentorId).then(handleDeleteMentorSuccess, handleErrors);
	}

	function handleDeleteMentorSuccess(){
		getAllMentors();
	}

	function deleteOrganization(organizationId){
		dashboardAdminService.deleteOrganization(organizationId).then(handleDeleteOrganizationSuccess, handleErrors);
	}

	function handleDeleteOrganizationSuccess(){
		getAllOrganizations();
	}

	getPendingProposals();
	getAllMentors();
	getAllOrganizations();
}
