'use strict';

angular
	.module('mentors4me')
	.controller('createMentorController', createMentorController);

function createMentorController($scope, $location, registerService) {

  $scope.register = register;

  function register(){
    var obj = {
      email : $scope.user.email,
      name : $scope.user.organization.name,
      asignee : $scope.user.first_name + " " + $scope.user.last_name,
      city : $scope.user.city,
      phone_number : $scope.user.phone_number,
      password : $scope.user.password,
      password_confirmation : $scope.user.confirm_password,
      skill_ids: $scope.selectedSkills
    };
    console.log(obj);
    registerService.register(obj).then(handleCreateSuccess, handleCreateError);
   }

  function handleCreateSuccess(response){
    $location.path("/login");
  }



  function handleCreateError(response){
    $location.path("/register");
  }
}
