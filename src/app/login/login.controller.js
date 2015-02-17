(function(){

  'use strict';

  angular.module('rpnapp.login')
    .controller('Login', Login);

  Login.$inject = ['$rootScope', '$http', '$state', 'authService', 'AUTH_EVENTS'];

  function Login($rootScope, $http, $state, authService, AUTH_EVENTS){
    
    // vm = view model
    var vm = this;

    vm.credentials = {
      user: '',
      password: ''
    };


    
    vm.login = function(credentials){

      authService.login(credentials)
        .then(function(res){
          $rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
          vm.setCurrentUser(res.user);
        })
        .catch(function(){
          $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
        });
    }

  }

})();