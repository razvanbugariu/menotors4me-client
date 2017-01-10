'use strict';

angular
	.module('mentors4me')
	.controller('mentorProposalController', mentorProposalController);

function mentorProposalController($scope, $location, mentorService) {

	$scope.proposeMentor = proposeMentor;

	function proposeMentor(){
		var proposal = {
			email : $scope.proposal.email,
			description : $scope.proposal.description
		}
		mentorService.proposeMentor(proposal).then(handleProposalSuccess, handleProposalError);
	}

	function handleProposalSuccess(response){
		$location.path('/home');
	}

	function handleProposalError(responseError){
		console.log(responseError);
	}

}
