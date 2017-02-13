'use strict';

angular
  .module('mentors4me')
  .controller('registerController', registerController);

function registerController($scope, $location, registerService, growl, Constants, $translate) {

  $scope.errors = [];
  $scope.register = register;
  $scope.setActiveStep = setActiveStep;

  $scope.activeStep = 0;

  $scope.tabs = [
    {
      title: $translate.instant('first_step'),
      templateUrl: 'app/components/register/first.step.html'
    },
    {
      title: $translate.instant('second_step'),
      templateUrl: 'app/components/register/second.step.html'
    }
  ];

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
    registerService.register(obj).then(handleCreateSuccess, handleErrors);
  }

  function handleCreateSuccess(response){
    growl.info("accout_created_success");
    $location.path(Constants.LOGIN);
  }

  function handleErrors(responseErrors) {
    $scope.errors = responseErrors.data.errors;
  }

  function setActiveStep(step){
    $scope.activeStep = step;
  }

}
