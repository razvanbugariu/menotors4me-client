'use strict';

angular
  .module('mentors4me')
  .controller('proposalController', mentorProposalController);

function mentorProposalController($scope, $location, proposalService, Constants, growl, $translate) {


  $scope.saveUserAndGoNext = saveUserAndGoNext;
  $scope.goToStep = goToStep;
  $scope.finish = finish;

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

  function proposeMentor(user, mentor) {
    var proposal = {
      proposer_first_name: user.first_name,
      proposer_last_name: user.last_name,
      proposer_email: user.email,
      proposer_phone_number: user.phone_number,
      mentor_first_name: mentor.first_name,
      mentor_last_name: mentor.last_name,
      mentor_organization: mentor.organizations,
      mentor_email: mentor.email,
      mentor_phone_number: mentor.phone_number,
      mentor_facebook: mentor.facebook,
      mentor_linkedin: mentor.linkedin,
      reason: mentor.motivation
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
    goToStep(1);
  }

  function goToStep(step){
    $scope.activeStep = step;
  }

  function finish(mentor){
    proposeMentor($scope.user, mentor);
  }

}
