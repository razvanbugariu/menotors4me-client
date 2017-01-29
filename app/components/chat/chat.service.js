'use strict'

angular
.module('mentors4me')
.factory('chatService', function($rootScope, CHAT_EVENTS, ActionCableChannel) {
	var chatService = {};

	var consumer = new ActionCableChannel("ChatChannel", {user: 42, chat: 37})

	consumer.subscribe(function(message){ $scope.thing = message });

	chatService.sendMessage = function(){
		consumer.send('message');
	}

	return chatService;
});
