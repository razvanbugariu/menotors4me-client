'use strict';

angular
  .module('mentors4me')
  .controller('registerController', registerController);

function registerController($scope, $location, registerService, growl, Constants, $translate) {

  $scope.errors = [];
  $scope.activeStep = 0;
  $scope.user={};

  $scope.goToNextStep = goToNextStep;
  $scope.goBack = goBack;
  $scope.finish = finish;
  $scope.tabs = [
    {
      title: $translate.instant('first_step'),
      templateUrl: 'app/components/register/first.step.html',
      disable: true
    },
    {
      title: $translate.instant('second_step'),
      templateUrl: 'app/components/register/second.step.html',
      disable: true
    }
  ];

  function register(user, organization) {
    var obj = {
      email: user.email,
      name: organization.name,
      asignee: user.first_name + " " + user.last_name,
      city: organization.city,
      phone_number: user.phone_number + "",
      password: user.password,
      password_confirmation: user.confirm_password,
      description: organization.description,
      facebook: organization.facebook
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

  function goToNextStep(user){
    saveUser(user);
    $scope.activeStep = 1;
  }

  function goBack(){
    $scope.activeStep = 0;
  }

  function finish(organization){
    register($scope.user, organization);
  }

  function saveUser(user){
    $scope.user = user;
  }

}
