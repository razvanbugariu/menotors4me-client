'use strict';

angular
  .module('mentors4me')
  .controller('proposalController', mentorProposalController);

function mentorProposalController($scope, $location, proposalService, Constants, growl) {

  $scope.errors = [];

  $scope.proposeMentor = proposeMentor;

  function proposeMentor() {
    var proposal = {
      email: $scope.proposal.email,
      description: $scope.proposal.description
    }
    proposalService.proposeMentor(proposal).then(handleProposalSuccess, handleErrors);
  }

  function handleProposalSuccess(response) {
    growl.info("propose_mentor_success");
    $location.path(Constants.HOME);
  }

  function handleErrors(responseError) {
    $scope.errors = responseError.data.errors;
  }
}
