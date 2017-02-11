'use strict';

angular
  .module('mentors4me')
  .controller('registerController', registerController);

function registerController($scope, $location, registerService) {

  $scope.errors = [];
  $scope.register = register;

  function register() {
    var obj = {
      email: $scope.user.email,
      name: $scope.user.organization.name,
      asignee: $scope.user.first_name + " " + $scope.user.last_name,
      city: $scope.user.city,
      phone_number: $scope.user.phone_number + "",
      password: $scope.user.password,
      password_confirmation: $scope.user.confirm_password,
      description: $scope.user.description
    };
    console.log(obj);
    registerService.register(obj).then(handleCreateSuccess, handleErrors);
  }

  function handleCreateSuccess(response) {
    $location.path("/login");
  }

  function handleErrors(responseErrors) {
    $scope.errors = responseErrors.data.errors;
  }
}
