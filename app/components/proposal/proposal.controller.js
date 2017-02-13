'use strict';

angular
  .module('mentors4me')
  .controller('proposalController', mentorProposalController);

function mentorProposalController($scope, $location, proposalService, Constants, growl, $translate) {


  $scope.proposeMentor = proposeMentor;
  $scope.saveUserAndGoNext = saveUserAndGoNext;

  $scope.activeStep = 0;
  $scope.errors = [];
  $scope.tabs = [
   {
     title: $translate.instant('personal_details'),
     templateUrl: 'app/components/proposal/personal.tab.html',
     disable: true
   },
   {
     title: $translate.instant('mentor_details'),
     templateUrl: 'app/components/proposal/mentor.tab.html',
     disable: true
   }];

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

  function saveUserAndGoNext(user){
    $scope.user = user;
    $scope.activeStep = 1;
  }

}
