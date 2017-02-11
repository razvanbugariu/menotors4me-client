'use strict';

angular
  .module('mentors4me')
  .controller('dashboardOrganizationController', dashboardOrganizationController);

function dashboardOrganizationController($scope, $location, Constants, $translate, dashboardOrganizationService, growl) {

  $scope.errors = [];
  $scope.pendingContexts = [];
  $scope.acceptedContexts = [];
  $scope.goToDetails = goToDetails;

  $scope.tabs = [
    {
      title: $translate.instant('incoming_events'),
      templateUrl: 'app/components/dashboard/organization/activeEvents.html'
    },
    {
      title: $translate.instant('pending_events'),
      templateUrl: 'app/components/dashboard/organization/pendingEvents.html'
    },
  ];

  function getPendingContexts(){
    dashboardOrganizationService.getPendingContexts().then(handleGetPendingCtxSuccess, handleErrors);
  }

  function handleGetPendingCtxSuccess(response){
    $scope.pendingContexts = response.data.data;
  }

  function handleErrors(responseError){
    $scope.errors = responseError.data.errors;
  }

  function getAcceptedContexts(){
    dashboardOrganizationService.getAcceptedContexts().then(handleGetAcceptedCtxSuccess, handleErrors);
  }

  function handleGetAcceptedCtxSuccess(response){
    $scope.acceptedContexts = response.data.data;
  }

  function goToDetails(selectedContext){
    if(selectedContext.status === Constants.ACCEPTED){
      $location.path(Constants.CONTEXTS + "/" + selectedContext.id);
    } else {
      growl.error("not_accepted_context");
    }
  }

  getPendingContexts();
  getAcceptedContexts();

}
