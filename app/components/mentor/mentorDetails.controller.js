'use strict';

angular
  .module('mentors4me')
  .controller('mentorDetailsController', mentorDetailsController);

function mentorDetailsController($scope, $location, $routeParams, mentorService, $cookies, authorizationService, Constants, growl) {

  $scope.errors = [];

  $scope.goToInvitation = goToInvitation;
  $scope.sendInvitation = sendInvitation;
  $scope.edit = edit;
  $scope.isOrganization = isOrganization;

  function isOrganization() {
    return authorizationService.isOrganization();
  }

  function getSelectedMentor() {
    mentorService.getMentorById($routeParams.mentorId).then(handleGetMentorByIdSuccess, handleErrors);
  };

  function handleGetMentorByIdSuccess(response) {
    $scope.selectedMentor = response.data.data;
  }

  function goToInvitation() {
    $location.path(Constants.MENTORS + "/" + $scope.selectedMentor.id + "/" + Constants.INVITE);
  }

  function sendInvitation() {
    var context = {
      mentor_id: $routeParams.mentorId,
      organization_id: $cookies.get(Constants.USER_ID),
      description:$scope.invitation.description
    }
    mentorService.inviteToEvent(context, $cookies.get(Constants.TOKEN)).then(handleSuccess, handleErrors);
  }

  function handleSuccess() {
    growl.info("invite_mentor_success");
    $location.path(Constants.DASHBOARD + "/" + Constants.ORGANIZATION);
  }

  function handleErrors(responseError) {
    $scope.errors = responseError.data.errors;
  }

  function edit() {
    $location.path(Constants.PROFILE_MENTOR + $cookies.get(Constants.USER_ID) + Constants.EDIT);
  }

  function checkIfCurrentMentor() {
    $scope.isCurrentMentor = mentorService.checkIfMentor() && $routeParams.mentorId === $cookies.get(Constants.USER_ID);
  }

  checkIfCurrentMentor();
  getSelectedMentor();

}
