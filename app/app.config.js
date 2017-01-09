'use strict';
angular
	.module('mentors4me')
	.config(function ($translateProvider) {
	   $translateProvider.useStaticFilesLoader({
	     prefix: 'locale/messages_',
	     suffix: '.json'
	   });
	   $translateProvider.preferredLanguage('en');
	})
