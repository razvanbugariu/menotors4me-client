'use strict';
angular
  .module('mentors4me')
  .directive('m4meFooter', function() {
    return {
      restrict: "EA",
      templateUrl: "app/shared/templates/m4meFooter.html",
      controller: function($scope, $location, Constants) {

        $scope.goToHome = goToHome;
        $scope.goToContactPage = goToContactPage;

        function goToHome() {
          $location.path(Constants.HOME);
        }

        function goToContactPage() {
          $location.path(Constants.CONTACTS);
        }

      }
    }
  });
