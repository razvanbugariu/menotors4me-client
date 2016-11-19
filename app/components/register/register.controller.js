'use strict';

angular
	.module('mentors4me')
	.controller('registerController', registerController);

function registerController($scope, $location, registerService) {

  $scope.organizations = [];
  $scope.register = register;

  function handleGetOrgError() {
    //Error
  }

  function handleGetOrgSuccess(response) {
    $scope.organizations = response.data.data;
  }

  function getOrganizations(){
    registerService.getOrganizations().then(handleGetOrgSuccess, handleGetOrgError)
  };

  function register(){

  }

  getOrganizations();

}
