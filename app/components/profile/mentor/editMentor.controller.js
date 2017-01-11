'use strict';

angular
	.module('mentors4me')
	.controller('editMentorController', editMentorController);

function editMentorController($scope, editMentorService, $cookies, $location, Constants) {

	$scope.selectedSkillsIds = [];
	$scope.edit = edit;
	$scope.addSkillToList = addSkillToList;
	$scope.removeSkillFromList = removeSkillFromList;
	$scope.displayButton = displayButton;

	function getCurrentMentor(){
		editMentorService.getCurrentMentor().then(handleGetCurrentMentorSuccess, handleResponseError);
	}

	function handleGetCurrentMentorSuccess(response){
		$scope.currentMentor = response.data.data;
		getSkills();
	}

	function handleResponseError(responseError){
		console.log(responseError);
	}

	function edit(){
		$scope.currentMentor.skills = $scope.selectedSkillsIds;
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
		sincronizeSkills();
	}

	function addSkillToList(skillId){
		$scope.selectedSkillsIds.push(skillId);
	}

	function removeSkillFromList(skillId){
		var index = $scope.selectedSkillsIds.indexOf(skillId);
		$scope.selectedSkillsIds.splice(index, 1);
		console.log($scope.selectedSkillsIds);
	}

	function displayButton(skill){
		return $scope.currentMentor.skills.indexOf(skill.name) === -1 ? false : true;
	}

	function sincronizeSkills(){
		var i = 0;
		for(i = 0 ; i < $scope.skills.length; i++){
			if($scope.currentMentor.skills.indexOf($scope.skills[i].name) != -1){
				addSkillToList($scope.skills[i].id);
			}
		}
		console.log($scope.selectedSkillsIds);
	}

	getCurrentMentor();
}
