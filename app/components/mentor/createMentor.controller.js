'use strict';

angular
	.module('mentors4me')
	.controller('createMentorController', createMentorController);

function createMentorController($scope, $location, registerService, skillsService, $routeParams) {

  $scope.register = register;
	$scope.selectedSkillsIds = [];
	$scope.addSkillToList = addSkillToList;
	$scope.skills = [];

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
    registerService.registerMentor(obj, $routeParams.token).then(handleCreateSuccess, handleCreateError);
   }

  function handleCreateSuccess(response){
    $location.path("/login");
  }

	function addSkillToList(skillId){
		console.log("Added");
		$scope.selectedSkillsIds.push(skillId);
	}

  function handleCreateError(responseError){
		console.log("Error");
  }

	function getSkills(){
		skillsService.getAllSkills().then(handleGetAllSkillsSuccess, handleGetAllSkillsError);
	}

	function handleGetAllSkillsSuccess(response){
    $scope.skills = response.data.data;
  }

	function handleGetAllSkillsError(responseError){
    $location.path("/register");
  }

	getSkills();

}
