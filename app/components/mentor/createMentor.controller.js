'use strict';

angular
	.module('mentors4me')
	.controller('createMentorController', createMentorController);

function createMentorController($scope, $location, registerService, skillsService, $routeParams, Constants, growl) {

	$scope.skills = [];
	$scope.errors = [];

  $scope.register = register;
	$scope.selectedSkillsIds = [];
	$scope.addSkillToList = addSkillToList;
	$scope.removeSkillFromList = removeSkillFromList;

  function register(){
    var obj = {
      email : $scope.user.email,
      first_name : $scope.user.first_name,
			last_name : $scope.user.last_name,
      description : $scope.user.description,
      city : $scope.user.city,
      phone_number : $scope.user.phone_number,
      password : $scope.user.password,
      password_confirmation : $scope.user.confirm_password,
      skills: $scope.selectedSkillsIds
    };
    console.log(obj);
    registerService.registerMentor(obj, $routeParams.token).then(handleCreateSuccess, handleErrors);
   }

  function handleCreateSuccess(response){
    $location.path(Constants.LOGIN);
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

  function handleErrors(responseError){
		$scope.errors = responseError.data.errors;
  }

	function getSkills(){
		skillsService.getAllSkills().then(handleGetAllSkillsSuccess, handleErrors);
	}

	function handleGetAllSkillsSuccess(response){
    $scope.skills = response.data.data;
  }
	getSkills();
}
