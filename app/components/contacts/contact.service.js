'use strict';

angular
  .module('mentors4me')
  .factory('contactService', function($http, Constants) {
    var contactService = {};

    contactService.sendFeedback = function(feedback){
      return $http.post(Constants.DOMAIN + Constants.CONTACTS, feedback);
    }
    return contactService;
  });
