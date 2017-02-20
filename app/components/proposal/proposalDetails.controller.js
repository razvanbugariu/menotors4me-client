'use strict';

angular
  .module('mentors4me')
  .controller('proposalDetailsController', registerController);

function registerController($scope, $cookies, $location, USER_ROLES, Constants, growl, proposalService, $routeParams) {

  $scope.approveMentor = approveMentor;
  $scope.rejectMentor = rejectMentor;

  function getSelectedProposal(){
    proposalService.getProposalById($routeParams.proposalId).then(handleGetProposalSuccess, handleErrors);
  }

  function handleGetProposalSuccess(response){
    $scope.currentProposal = response.data.data;
  }

  function handleErrors(){
    growl.error("Something went wrong");
  }

  function approveMentor(proposal){
    proposalService.approveMentor($routeParams.proposalId, $cookies.get(Constants.TOKEN)).then(handleApproveSuccess, handleErrors);
  }

  function handleApproveSuccess(response){
    growl.info("approve_mentor");
    $location.path(Constants.DASHBOARD + "/" + USER_ROLES.ADMIN);
  }

  function handleErrors(responseError){
    growl.error("Something went wrong!");
    $location.path(Constants.DASHBOARD + "/" + USER_ROLES.ADMIN);
  }

  function rejectMentor(proposal){
    proposalService.rejectMentor($routeParams.proposalId, $cookies.get(Constants.TOKEN)).then(handleRejectSuccess, handleErrors);
  }

  function handleRejectSuccess(response){
    growl.info("reject_mentor");
    $location.path(Constants.DASHBOARD + "/" + USER_ROLES.ADMIN);
  }

  getSelectedProposal();
}
