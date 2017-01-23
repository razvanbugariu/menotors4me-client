'use strict';

angular
	.module('mentors4me')
	.controller('editMentorController', editMentorController);

function editMentorController($scope, editMentorService, $cookies, $location, Constants, growl) {

	$scope.error = [];

	$scope.selectedSkillsIds = [];
	$scope.edit = edit;
	$scope.addSkillToList = addSkillToList;
	$scope.removeSkillFromList = removeSkillFromList;
	$scope.displayButton = displayButton;

	function getCurrentMentor(){
		editMentorService.getCurrentMentor().then(handleGetCurrentMentorSuccess, handleErrors);
	}

	function handleGetCurrentMentorSuccess(response){
		$scope.currentMentor = response.data.data;
		getSkills();
	}

	function handleErrors(responseError){
		$scope.errors= responseError.data.errors;
	}

	function edit(){
		$scope.currentMentor.skills = $scope.selectedSkillsIds;
		editMentorService.updateMentor($scope.currentMentor).then(handleUpdateSuccess, handleErrors);
	}

	function handleUpdateSuccess(){
		$location.path(Constants.MENTORS + "/" + $cookies.get("userId"));
		growl.info("Profilul dumneavoastra a fost salvat cu succes!");
	}

	function getSkills(){
		editMentorService.getSkills().then(handleGetSkillsSuccess, handleErrors);
	}

	function handleGetSkillsSuccess(response){
		$scope.skills = response.data.data;
		sincronizeSkills();
	}

	function pushToList(skillId){
		$scope.selectedSkillsIds.push(skillId);
	}

	function addSkillToList(skill){
		if($scope.selectedSkillsIds.indexOf(skill.id) === -1){
			pushToList(skill.id);
			growl.info(skill.name + " a fost adaugat la profilul dumneavoastra");
		} else {
			growl.warning(skill.name + " face parte din profilul dumneavoastra!");
		}
	}

	function removeSkillFromList(skill){
		if($scope.selectedSkillsIds.indexOf(skill.id) === -1){
			growl.warning(skill.name + " nu poate fi sters deoarece nu face parte din profilul dumneavoastra");
		} else {
			var index = $scope.selectedSkillsIds.indexOf(skill.id);
			$scope.selectedSkillsIds.splice(index, 1);
			growl.info(skill.name + " a fost sters din profilul dumneavoastra!");
		}
	}

	function displayButton(skill){
		return $scope.currentMentor.skills.indexOf(skill.name) === -1 ? false : true;
	}

	function sincronizeSkills(){
		var i = 0;
		for(i = 0 ; i < $scope.skills.length; i++){
			if($scope.currentMentor.skills.indexOf($scope.skills[i].name) != -1){
				pushToList($scope.skills[i].id);
			}
		}
		console.log($scope.selectedSkillsIds);
	}

	getCurrentMentor();
}
