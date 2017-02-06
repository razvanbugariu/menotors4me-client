'use strict'

angular
	.module('mentors4me').constant('AUTH_EVENTS', {
		loginSuccess: 'auth-login-success',
	  loginFailed: 'auth-login-failed',
	  logoutSuccess: 'auth-logout-success',
	  logoutFailed: 'auth-logout-success',
	  notAuthenticated: 'auth-not-authenticated',
	  notAuthorized: 'auth-not-authorized',
		received401: 'received-error-401'
})
