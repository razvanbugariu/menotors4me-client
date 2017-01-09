'use strict';

angular
	.module('mentors4me')
	.controller('mentorDetailsController', mentorDetailsController);

function mentorDetailsController($scope, $location, $routeParams, mentorService, $cookies) {

	$scope.inviteMentorToEvent = inviteMentorToEvent;
	$scope.goToInvitation = goToInvitation;
	$scope.sendInvitation = sendInvitation;

	function inviteMentorToEvent () {
		var objBody = {
			profile_id : $scope.selectedMentor.id,
			organization_id : $cookies.get("userId"),
			description : $scope
		}
	}

  function getSelectedMentor(){
    mentorService.getMentorById($routeParams.mentorId).then(handleGetMentorByIdSuccess, handleGetMentorByIdError);
  };

  function handleGetMentorByIdSuccess(response){
      $scope.selectedMentor = response.data.data;
  }

	function goToInvitation (){
		$location.path("/mentors/ " + $scope.selectedMentor.id + "/invite");
	}

	function sendInvitation (){
		var context = {
			mentor_id: $routeParams.mentorId,
			organization_id: $cookies.get("userId"),
			description: $scope.invitation.address + "\n" + $scope.invitation.description
		}
		mentorService.inviteToEvent(context, $cookies.get("token")).then(handleSuccess, handleError);
	}

	function handleSuccess(){
		console.log("Working");
	}

	function handleError(responseError){
		console.log(responseError);
	}

  function handleGetMentorByIdError(response){
    console.log("Error");
  }

  getSelectedMentor();

}
