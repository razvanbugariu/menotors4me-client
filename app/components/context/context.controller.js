'use strict';

angular
  .module('mentors4me')
  .controller('contextController', contextController);

function contextController($scope, Constants, $routeParams, $rootScope, ActionCableChannel, contextsService, authorizationService, $location, growl, $cookies, $window) {

  var senderId;
  var receiverId;
  $scope.messages = [];
  $scope.goToMentorDetails = goToMentorDetails;

  console.log($location.$$path);

  var consumer = new ActionCableChannel(Constants.CHAT_CHANNEL, {
    context_id: $routeParams.id
  });

  consumer.subscribe(function(messages) {
    if ($scope.messages.length === 0) {
      addToMessages(JSON.parse(messages));
    } else {
      if (JSON.parse(messages).length === 1) {
        addToMessages(JSON.parse(messages));
      }
    }
  });

  $scope.isSender = function isSender(message) {
    var response = (message.sender_id === senderId ? Constants.SENDER : Constants.RECEIVER);
    return response;
  }

  function addToMessages(messages) {
    var i;
    for (i = 0; i < messages.length; i++) {
      if ($scope.messages.length > 0) {
        var lastMessage = $scope.messages[$scope.messages.length - 1];
        if (lastMessage.sender_id === messages[i].sender_id) {
          if ((new Date(messages[i].sent_at) - new Date(lastMessage.sent_at)) < 100000) {
            messages[i].sender = false;
          }
        }
      }
      $scope.messages.push(messages[i]);
    }
  }

  $scope.sendMessage = function() {
    var object = {
      sender_id: senderId,
      receiver_id: receiverId,
      message: $scope.inputMessage
    };
    consumer.send(object);
    $scope.inputMessage = "";
  };

  function getCurrentContext() {
    contextsService.getContextById($routeParams.id).then(handleGetCurrentContextSuccess, handleErrors);
  }

  function handleGetCurrentContextSuccess(response) {
    $scope.currentContext = response.data.data;
    decideSenderAndReceiver();
  }

  function handleErrors(responseError) {
    $scope.errors = responseError.data.errors;
  }

  function decideSenderAndReceiver() {
    if (authorizationService.isMentor()) {
      senderId = $scope.currentContext.mentor_id;
      receiverId = $scope.currentContext.organization_id;
    } else {
      senderId = $scope.currentContext.organization_id;
      receiverId = $scope.currentContext.mentor_id;
    }
  }

  function goToMentorDetails() {
    $location.path(Constants.MENTORS + "/" + $scope.currentContext.mentor_id);
  }

  function isEligible() {
    contextsService.getContexts().then(checkIsEligible, handleErrors)
  }

  function checkIsEligible(response) {
    var acceptedContexts = [];
    acceptedContexts = response.data.data;
    if (checkContext(acceptedContexts)) {
      growl.error("unauthorized");
      $window.history.back();
    }
  }

  function checkContext(contexts) {
    for (var i = 0; i < contexts.length; i++) {
      if (contexts[i].id === $scope.currentContext.id) {
        return false;
      }
    }
    return true;
  }

  $scope.$on('$locationChangeStart', function() {
    consumer.unsubscribe().then(function() {});
  });

  getCurrentContext();
  isEligible();
}
