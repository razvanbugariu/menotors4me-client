'use strict';

angular
  .module('mentors4me')
  .controller('editMentorController', editMentorController);

function editMentorController($scope, editMentorService, $cookies, $location, Constants, growl) {

  $scope.error = [];

  $scope.selectedSkills = [];
  $scope.edit = edit;
  $scope.displayButton = displayButton;

  function getCurrentMentor() {
    editMentorService.getCurrentMentor().then(handleGetCurrentMentorSuccess, handleErrors);
  }

  function handleGetCurrentMentorSuccess(response) {
    $scope.currentMentor = response.data.data;
    getSkills();
  }

  function handleErrors(responseError) {
    $scope.errors = responseError.data.errors;
  }

  function selectIds(skillsArray) {
    var skillsIds = [];
    skillsArray.forEach(function(skill) {
      skillsIds.push(skill.id)
    });
    return skillsIds
  }

  function edit() {
    $scope.currentMentor.skills = selectIds($scope.selectedSkills);
    editMentorService.updateMentor($scope.currentMentor).then(handleUpdateSuccess, handleErrors);
  }

  function handleUpdateSuccess() {
    $location.path(Constants.PROFILE_MENTOR + $cookies.get(Constants.USER_ID));
    growl.info("profile_update_success");
  }

  function getSkills() {
    editMentorService.getSkills().then(handleGetSkillsSuccess, handleErrors);
  }

  function handleGetSkillsSuccess(response) {
    $scope.optionsList = response.data.data;
    $scope.selectedSkills = $.grep($scope.optionsList, function(e) {
      return $scope.currentMentor.skills.indexOf(e.name) > -1
    });
  }

  function displayButton(skill) {
    return $scope.currentMentor.skills.indexOf(skill.name) === -1 ? false : true;
  }

  getCurrentMentor();
}
