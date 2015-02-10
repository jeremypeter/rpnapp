(function(){

  'use strict';
  
  angular.module('rpnapp.login', [])
    .config(loginRoute);

  loginRoute.$inject = ['$stateProvider'];

  function loginRoute($stateProvider){
    
    $stateProvider
      .state('login', {
        url: '/',
        templateUrl: 'app/login/login.html',
        controller: 'Login',
        controllerAs: 'login'
      });
  }

})();