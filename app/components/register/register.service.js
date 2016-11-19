'use strict'

angular
	.module('mentors4me')
	.factory('registerService', ['$http', function($http) {
		var registerService = {};

    var URL = "https://mentors4me-api.herokuapp.com/";

    registerService.getOrganizations = function(){
      return $http.get(URL + "api/organizations");
    }

    registerService.getOrganizationsNames = function(organizations){
      var organizationsNames = [];
      console.log("Service:" + organizations);
      for(var i = 0 ; i < organizations.length ; i++){
        organizationsNames[i] = organizations[i].name;
      }
      return organizationsNames;
    }

		return registerService;
	}

	]);
