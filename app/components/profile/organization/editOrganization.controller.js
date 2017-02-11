'use strict';

angular
  .module('mentors4me')
  .controller('editOrganizationController', editOrganizationController);

function editOrganizationController($scope, editOrganizationService, $location, Constants, $cookies) {

  $scope.errors = [];

  $scope.updateOrganization = updateOrganization;
  $scope.edit = edit;

  function getCurrentOrganization() {
    editOrganizationService.getCurrentOrganization().then(handleGetCurrentUserSuccess, handleErrors);
  }

  function handleGetCurrentUserSuccess(response) {
    $scope.currentUser = response.data.data;
  }

  function updateOrganization() {
    editOrganizationService.updateOrganization($scope.currentUser).then(handleUpdateSuccess, handleErrors);
  }

  function handleUpdateSuccess() {
    $location.path("/organizations" + "/" + $cookies.get("userId"));
  }

  function handleErrors(responseError) {
    $scope.errors = responseError.data.errors;
  }

  function edit() {
    $location.path("/organizations" + "/" + $cookies.get("userId") + Constants.EDIT);
  }

  getCurrentOrganization();
}
