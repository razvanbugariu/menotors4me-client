'use strict';

angular
	.module('mentors4me')
	.controller('mentorProposalController', mentorProposalController);

function mentorProposalController($scope, $location, mentorService) {

	$scope.proposeMentor = proposeMentor;

	function proposeMentor(){
		console.log("ADADSDSDSAD");
	}

}
