'use strict'

angular
	.module('mentors4me')
	.factory('contextsService', function($http, Constants) {
		var contextsService = {};

		contextsService.inviteToEvent = function(context, token){
			var req = {
							 method: 'POST',
							 url: Constants.DOMAIN + "api/context",
							 headers: {
								 'Authorization': $cookies.get("token")
							 },
							 data : context
							};
			return $http(req).then(handleInvitationSuccess, handleInvitationError);
		}

    function handleInvitationSuccess(){
      console.log("It's working");
    }

    function handleInvitationSuccess(responseError){
      console.log(responseError);
    }

		return mentorService;
	}

	);
