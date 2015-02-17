(function(){

  'use strict';

  angular.module('rpnapp', [
    
    // 3rd Party Modules
    'ngAnimate', 
    'ngCookies', 
    'ngTouch', 
    'ngSanitize', 
    'ui.router', 
    'ui.bootstrap', 

    // Local Modules
    'rpnapp.base',
    'rpnapp.login',
    'rpnapp.ebooks',
    'rpnapp.coach',
    'rpnapp.videos'

  ])
  .config(defaultRoute)
  .constant('AUTH_EVENTS', {
    loginSuccess: 'auth-login-success',
    loginFailed: 'auth-login-failed',
    logoutSuccess: 'auth-logout-success',
    sessionTimeout: 'auth-session-timeout',
    notAuthenticated: 'auth-not-authenticated',
    notAuthorized: 'auth-not-authorized'
  })
  .constant('USER_ROLES', {
    all: '*',
    admin: 'admin',
    coach: 'coach',
    client: 'client'
  });

  defaultRoute.$inject = ['$urlRouterProvider']

  function defaultRoute($urlRouterProvider){
    $urlRouterProvider.otherwise('/login');
  }

})();