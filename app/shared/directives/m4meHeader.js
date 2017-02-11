'use strict';
angular
  .module('mentors4me')
  .directive('autoActive', ['$location', function($location) {
    return {
      restrict: 'A',
      scope: false,
      link: function(scope, element) {
        function setActive() {
          var path = $location.path();
          if (path) {
            angular.forEach(element.find('li'), function(li) {
              var anchor = li.querySelector('a');
              if (('#' + path).match(anchor.getAttribute('data') +  '\/?[0-9]*')) {
                angular.element(li).addClass('active');
              } else {
                angular.element(li).removeClass('active');
              }
            });
          }
        }

        setActive();

        scope.$on('$locationChangeSuccess', setActive);
      }
    };
  }])
  .directive('m4meHeader', function() {
    return {
      restrict: "EA",
      templateUrl: "app/shared/templates/m4meHeader.html",
      controller: function($scope, $location, $rootScope, loginService, $cookies, Constants, AUTH_EVENTS, authorizationService) {

        $scope.isAuth = false;
        $scope.goToMentors = goToMentors;
        $scope.goToDashboard = goToDashboard;
        $scope.goToSuggestMentor = goToSuggestMentor;
        $scope.goToLogin = goToLogin;
        $scope.logout = logout;
        $scope.goToProfile = goToProfile;
        $scope.goToRegister = goToRegister;

        function goToRegister() {
          $location.path("/register");
        }

        function goToProfile() {
          var path = "/" + 'profile/' + $cookies.get("userId");
          $location.path(path);
        }

        function goToMentors() {
          $location.path(Constants.MENTORS);
        }

        function goToDashboard() {
          $location.path(Constants.DASHBOARD + "/" + $cookies.get("userRole"));
        }

        function goToSuggestMentor() {
          $location.path(Constants.PROPOSE_MENTOR);
        }

        function goToLogin() {
          $location.path(Constants.LOGIN);
        }

        function logout() {
          loginService.logout();
        }

        $rootScope.$on(AUTH_EVENTS.loginSuccess, function(event, args) {
          checkCredentials()
        });

        $rootScope.$on(AUTH_EVENTS.logoutSuccess, function(event, args) {
          checkCredentials();
          $location.path(Constants.HOME);
        });

        function checkIfIsLoggedIn() {
          $scope.isAuth = authorizationService.isLoggedIn();
        }

        function checkIfAdmin() {
          $scope.isAdmin = authorizationService.isAdmin();
        }

        function checkCredentials() {
          checkIfIsLoggedIn();
          checkIfAdmin();
        }

        checkCredentials()

      }
    }
  });
