(function(){

  'use strict';
  
  angular.module('rpnapp.coach', [])
    .config(coachRoute);

  coachRoute.$inject = ['$stateProvider'];

  function coachRoute($stateProvider){
    
    $stateProvider
      .state('coach', {
        url: '/coach',
        templateUrl: 'app/person/coach.html',
        controller: 'Coach',
        controllerAs: 'coach'
      });
  }

})();