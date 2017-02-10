'use strict';

angular
  .module('mentors4me')
  .controller('loginController', loginController);

function loginController($scope, $location, $rootScope, AUTH_EVENTS, loginService, Constants) {
  function login() {
    var user = {
      email: $scope.user.email,
      password: $scope.user.password
    };
    loginService.login(user);
  }

  $scope.errors = [];
  $scope.login = login;

  $rootScope.$on(AUTH_EVENTS.loginSuccess, function(event, args) {
    $location.path(args);
  });

  $rootScope.$on(AUTH_EVENTS.loginFailed, function(event, args) {
    $scope.errors = args;
  });

  $rootScope.$on(AUTH_EVENTS.logoutFailed, function(event, args) {
    $scope.errors = args;
  });
}
