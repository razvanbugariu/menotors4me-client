'use strict'

angular
  .module('mentors4me')
  .factory('loginService', function($http, userService, $rootScope, AUTH_EVENTS, USER_ROLES, Constants, $cookies) {
      var loginService = {};
      loginService.login = function(user) {
        return $http.post(Constants.DOMAIN + Constants.SESSIONS, user).then(handleLoginSuccess, handleLoginError);
      }

      function handleLoginSuccess(response) {
        return getCurrentUser(response.data.data.auth_token);
      }

      function getCurrentUser(token) {
        saveToken(token);
        userService.getCurrentUser(token).then(handleGetCurrentUserSuccess, handleGetCurrentUserError);
      }

      function saveToken(token) {
        $cookies.put(Constants.TOKEN, token);
      }

      function handleGetCurrentUserSuccess(response) {
        var currentUser = response.data.data;
        saveUser(currentUser);
        notifyLoginSucces();
      }

      function saveUser(currentUser) {
        $cookies.put(Constants.USER_ID, currentUser.id);
        $cookies.put(Constants.USER_ROLE, currentUser.role[0]);
        $cookies.put(Constants.USER_NAME, currentUser.first_name + " " + currentUser.last_name);
      }

      function notifyLoginSucces() {
        $rootScope.$broadcast(AUTH_EVENTS.loginSuccess, decideWhereToGoBasedOn($cookies.get(Constants.USER_ROLE)));
      }

      function decideWhereToGoBasedOn(role) {
        if (role === USER_ROLES.ORGANIZATION) {
          return Constants.MENTORS;
        } else {
          return Constants.DASHBOARD + "/" + role;
        }

      }

      function handleLoginError(responseError) {
        notifyLoginFailed(responseError.data.errors);
      }

      function handleGetCurrentUserError(responseError) {
        console.log(responseError.data.errors);
      }

      function notifyLoginFailed(errors) {
        $rootScope.$broadcast(AUTH_EVENTS.loginFailed, errors);
      }

      loginService.logout = function() {
        var token = $cookies.get(Constants.TOKEN);
        $http.delete(Constants.DOMAIN + Constants.SESSIONS + "/" + token).then(handleLogout, notifyLogoutError);
      }

      function handleLogout() {
        deleteUserData();
        notifyLogoutSuccess();
      }

      function notifyLogoutError(responseError) {
        $rootScope.$broadcast(AUTH_EVENTS.logoutFailed, responseError.data.errors);
      }

      function notifyLogoutSuccess() {
        $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
      }

      function deleteUserData() {
        $cookies.remove(Constants.TOKEN);
        $cookies.remove(Constants.USER_ID);
        $cookies.remove(Constants.USER_ROLE);
        $cookies.remove(Constants.USER_NAME);
      }

      $rootScope.$on(AUTH_EVENTS.received401, function(event, args) {
        loginService.logout();
      });

      return loginService;
    }

  );
