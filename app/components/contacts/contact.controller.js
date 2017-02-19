'use strict';

angular
  .module('mentors4me')
  .controller('contactController', contactController);

function contactService($scope, $location, contactService, Constants, growl) {

  $scope.errors = [];

  $scope.contactUs = contactUs;

  function contactUs() {
    var info = {
      email: $scope.info.email,
      first_name: $scope.info.first_name,
      last_name: $scope.info.last_name,
      description: $scope.info.description
    }
    contactService.contactUs(info).then(handleContactSuccess, handleErrors);
  }

  function handleContactSuccess(response) {
    growl.info("propose_mentor_success");
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