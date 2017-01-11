'use strict';

angular
	.module('mentors4me')
	.controller('editMentorController', editMentorController);

function editMentorController($scope, editMentorService, $cookies, $location, Constants) {

	$scope.selectedSkillsIds = [];
	$scope.edit = edit;
	$scope.addSkillToList = addSkillToList;

	function getCurrentMentor(){
		editMentorService.getCurrentMentor().then(handleGetCurrentMentorSuccess, handleResponseError);
	}

	function handleGetCurrentMentorSuccess(response){
		$scope.currentMentor = response.data.data;
	}

	function handleResponseError(responseError){
		console.log(responseError);
	}

	function edit(){
		$scope.currentMentor.skill_ids = $scope.selectedSkillsIds.join();
		editMentorService.updateMentor($scope.currentMentor).then(handleUpdateSuccess, handleResponseError);
	}

	function handleUpdateSuccess(){
		$location.path(Constants.MENTORS + "/" + $cookies.get("userId"));
	}

	function getSkills(){
		editMentorService.getSkills().then(handleGetSkillsSuccess, handleResponseError);
	}

	function handleGetSkillsSuccess(response){
		$scope.skills = response.data.data;
	}

	function addSkillToList(skillId){
		$scope.selectedSkillsIds.push(skillId + "");
	}

	getCurrentMentor();
	getSkills();
}
