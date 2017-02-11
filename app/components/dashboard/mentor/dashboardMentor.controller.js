'use strict';

angular
  .module('mentors4me')
  .controller('dashboardMentorController', dashboardMentorController);

function dashboardMentorController($scope, $location, $translate, dashboardMentorService, growl) {

  $scope.errors = [];

  $scope.accRejContexts = [];
  $scope.pendingContexts = [];

  $scope.acceptContext = acceptContext;
  $scope.declineContext = declineContext;

  $scope.tabs = [
    {
      title: $translate.instant('events'),
      templateUrl: 'app/components/dashboard/mentor/activeEvents.html'
    },
    {
      title: $translate.instant('pending_events'),
      templateUrl: 'app/components/dashboard/mentor/pendingEvents.html'
    },
  ];

  function acceptContext(contextId){
    dashboardMentorService.acceptContext(contextId).then(handleAcceptSuccess, handleErrors);
  }

  function declineContext(contextId){
    dashboardMentorService.rejectContext(contextId).then(handleDeclineSuccess, handleErrors);
  }

  function handleAcceptSuccess(){
    growl.info("Contextul a fost acceptat cu succes!");
    handleAccDeclSuccess();
  }

  function handleDeclineSuccess(){
    growl.info("Contextul a fost refuzat cu succes!")
    handleAccDeclSuccess();
  }

  function handleAccDeclSuccess(){
    getPendingContexts();
    getRejectedAndAcceptedContexts();
  }

  function getPendingContexts(){
    dashboardMentorService.getPendingContexts().then(handleGetPendingCtxSuccess, handleErrors);
  }

  function handleGetPendingCtxSuccess(response){
    $scope.pendingContexts = response.data.data;
  }

  function getRejectedAndAcceptedContexts(){
    dashboardMentorService.getAcceptedContexts().then(handleGetContextsSuccess, handleErrors);
    dashboardMentorService.getRejectedContexts().then(handleGetContextsSuccess, handleErrors);
  }

  function handleGetContextsSuccess(response){
    $scope.accRejContexts = $scope.accRejContexts.concat(response.data.data);
  }

  function handleErrors(responseError){
    $scope.errors = responseError.data.errors;
  }

  $scope.goToDetails = function (selectedContext){
    if(selectedContext.status === 'accepted'){
      $location.path("/contexts/" + selectedContext.id);
    } else {
      growl.error("Faceti click pe un context cu status: accepted!");
    }
  }

  getPendingContexts();
  getRejectedAndAcceptedContexts();
}
