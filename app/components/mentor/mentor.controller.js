'use strict';

angular
	.module('mentors4me')
	.controller('mentorController', mentorController);

function mentorController($scope, $location, mentorService) {

	$scope.mentors = [];

	$scope.goToDetails = goToDetails;

	function getMentors(){
		console.log("SASASASA");
		mentorService.getAllMentors().then(handleGetAllMentorsSuccess, handleGetAllMentorsError);
	};

	function handleGetAllMentorsSuccess(response){
		$scope.mentors = response.data.data;
	};

	function handleGetAllMentorsError(responseError){
		console.log("Error");
	};

	function goToDetails(mentor){
		$location.path("/mentor/" + mentor.id);
	};

	getMentors();

}
