'use strict';

angular
  .module('mentors4me')
  .controller('contactController', contactController);

function contactController($scope, $location, contactService, Constants, growl) {

  $scope.errors = [];

  $scope.contactUs = contactUs;

  function contactUs() {
    var info = {
      email: $scope.info.email,
      first_name: $scope.info.first_name,
      last_name: $scope.info.last_name,
      message: $scope.info.description
    }
    contactService.sendFeedback(info).then(handleContactSuccess, handleErrors);
  }

  function handleContactSuccess(response) {
    growl.info("feedback_sent");
    $location.path(Constants.HOME);
  }

  function handleErrors(responseError) {
    $scope.errors = responseError.data.errors;
  }

  $scope.send = send;

  function send() {
    chatService.sendMessage();
  }

}
