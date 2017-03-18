'use strict';

angular
  .module('mentors4me')
  .controller('mentorController', mentorController);

function mentorController($scope, $location, mentorService, Constants) {

  $scope.errors = []
  $scope.mentors = [];

  $scope.goToDetails = goToDetails;

  function getActiveMentors() {
    mentorService.getMentorsByStatus(Constants.ACTIVE).then(handleGetActiveMentorsSuccess, handleErrors);
  };

  function handleGetActiveMentorsSuccess(response) {
    $scope.mentors = response.data.data;
  };

  function handleErrors(responseError) {
    $scope.errors = responseError.data.errors;
  };

  function goToDetails(mentor) {
    $location.path(Constants.PROFILE_MENTOR + mentor.id);
  };

  getActiveMentors();

}
