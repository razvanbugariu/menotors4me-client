'use strict';
angular
	.module('mentors4me')
	.config(function ($translateProvider, growlProvider) {
	   $translateProvider.useStaticFilesLoader({
	     prefix: 'locale/messages_',
	     suffix: '.json'
	   });
	   $translateProvider.preferredLanguage('ro');
		 growlProvider.globalTimeToLive(5000);
	})
