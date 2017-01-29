'use strict';

angular
	.module('mentors4me')
	.controller('mentorDetailsController', mentorDetailsController);

function mentorDetailsController($scope, $location, $routeParams, mentorService, $cookies, authorizationService) {

	$scope.errors = [];

	$scope.inviteMentorToEvent = inviteMentorToEvent;
	$scope.goToInvitation = goToInvitation;
	$scope.sendInvitation = sendInvitation;
	$scope.edit = edit;
	$scope.isOrganization =isOrganization

	function isOrganization(){
		return authorizationService.isOrganization();
	}

	function inviteMentorToEvent () {
		var objBody = {
			profile_id : $scope.selectedMentor.id,
			organization_id : $cookies.get("userId"),
			description : $scope
		}
	}

  function getSelectedMentor(){
    mentorService.getMentorById($routeParams.mentorId).then(handleGetMentorByIdSuccess, handleErrors);
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
		mentorService.inviteToEvent(context, $cookies.get("token")).then(handleSuccess, handleErrors);
	}

	function handleSuccess(){
		$location.path("/dashboard/organization");
	}

	function handleErrors(responseError){
		$scope.errors = responseError.data.errors;
	}

	function edit(){
		$location.path("/mentors/" + $cookies.get("userId") + "/edit");
	}

	function checkIfMentor(){
	  $scope.isMentor = mentorService.checkIfMentor();
	}

	checkIfMentor();
  getSelectedMentor();

}
