'use strict';

angular
  .module('mentors4me')
  .controller('loginController', loginController);

function loginController($scope, $location, $rootScope, AUTH_EVENTS, loginService, growl) {

  $scope.errors = [];
  $scope.login = login;
  function login() {
    var user = {
      email: $scope.user.email,
      password: $scope.user.password
    };
    loginService.login(user);
  }

  $rootScope.$on(AUTH_EVENTS.loginSuccess, function(event, args) {
    growl.info("login_success");
    $location.path(args);
  });

  $rootScope.$on(AUTH_EVENTS.loginFailed, function(event, args) {
    growl.info("login_failed");
    $scope.errors = args;
  });

  $rootScope.$on(AUTH_EVENTS.logoutFailed, function(event, args) {
    growl.info("logout_failed");
    $scope.errors = args;
  });

  $rootScope.$on(AUTH_EVENTS.logoutSuccess, function(event, args) {
    growl.info("logout_success");
  });
}
