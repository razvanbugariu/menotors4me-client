'use strict';

angular
	.module('mentors4me')
	.controller('contextController', contextController);

function contextController($scope, $routeParams, $rootScope, CHAT_EVENTS, ActionCableChannel, contextsService, authorizationService, $location) {

	var senderId;
	var receiverId;
	$scope.messages = [];
	$scope.isSender;
	$scope.goToMentorDetails = goToMentorDetails;

	var consumer = new ActionCableChannel("ChatChannel", {context_id: $routeParams.id})

	consumer.subscribe(function(messages){
				addToMessages(JSON.parse(messages));
			console.log(JSON.parse(messages));
		 });

  function addToMessages(messages){
		var i;
		for(i = 0; i < messages.length ; i++){
			$scope.messages.push(messages[i]);
		}
	}

	$scope.sendMessage = function(){
		var object = {
			sender_id: 9,
			receiver_id: 10,
			message: $scope.inputMessage
		};
		consumer.send(object);
		$scope.inputMessage = "";
	}

	function getCurrentContext(){
		contextsService.getContextById($routeParams.id).then(handleGetCurrentContextSuccess,handleGetCurrentContextError);
	}

	function handleGetCurrentContextSuccess(response){
		$scope.currentContext = response.data.data;
		decideSenderAndReceiver();
	}

	function handleGetCurrentContextError(responseError){
		$scope.errors = responseError.data.errors;
	}

	function decideSenderAndReceiver(){
		if(authorizationService.isMentor()){
			senderId = $scope.currentContext.mentor_id;
			receiverId = $scope.currentContext.organization_id;
		} else {
			senderId = $scope.currentContext.organization_id;
			receiverId = $scope.currentContext.mentor_id;
		}
	}

	function goToMentorDetails(){
		$location.path("/mentors/" + $scope.currentContext.mentor_id);
	}

	getCurrentContext();

}
