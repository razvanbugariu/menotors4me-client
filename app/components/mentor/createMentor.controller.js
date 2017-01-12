'use strict';

angular
	.module('mentors4me')
	.controller('createMentorController', createMentorController);

function createMentorController($scope, $location, registerService, skillsService, $routeParams, Constants) {

	$scope.skills = [];
	$scope.errors = [];

  $scope.register = register;
	$scope.selectedSkillsIds = [];
	$scope.addSkillToList = addSkillToList;

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
      skill_ids: $scope.selectedSkillsIds.join()
    };
    console.log(obj);
    registerService.registerMentor(obj, $routeParams.token).then(handleCreateSuccess, handleErrors);
   }

  function handleCreateSuccess(response){
    $location.path(Constants.LOGIN);
  }

	function addSkillToList(skillId){
		$scope.selectedSkillsIds.push(skillId);
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
