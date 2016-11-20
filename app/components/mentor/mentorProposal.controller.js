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
		if(response.data.success){
			$location.path('/home');
		} else {
			//Error message
		}
	}

	function handleProposalError(responseError){
		$scope.errorProposalMessage = responseError.data.errors;
	}

}
