'use strict';

angular
	.module('mentors4me')
	.controller('mentorDetailsController', mentorDetailsController);

function mentorDetailsController($scope, $location, $routeParams, mentorService, $window) {

	$scope.inviteMentorToEvent = inviteMentorToEvent;

	//Authorization, profile_id(id mentorului), organization id(user.orgID), description
	function inviteMentorToEvent () {
		var objBody = {
			profile_id : $scope.selectedMentor.profile_id,
			organization_id : $window.localStorage.getItem("organizationId"),
			description : $scope
		}
	}

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
