angular
  .module('mentors4me').run(function ($rootScope, $location, authorizationService, Constants) {
  $rootScope.$on('$routeChangeStart', function (event, next) {
    if(next.$$route.data != undefined){
      var authorizedRoles = next.$$route.data.authorizedRoles;
      if(!authorizationService.isAuthorized(authorizedRoles)){
        $location.path(Constants.NOT_AUTHORIZED);
      }
    }
  });
})
