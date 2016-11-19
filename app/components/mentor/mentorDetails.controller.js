'use strict';

angular
	.module('mentors4me')
	.controller('mentorDetailsController', mentorDetailsController);

function mentorDetailsController($scope, $location, $routeParams, mentorService) {

  function getSelectedMentor(){
    mentorService.getMentorById($routeParams.mentorId).then(handleGetMentorByIdSuccess, handleGetMentorByIdError);
  };

  function handleGetMentorByIdSuccess(response){
      $scope.selectedMentor = response.data.data;
  }

  function handleGetMentorByIdError(response){
    console.log("Error");
  }

  getSelectedMentor();

}
