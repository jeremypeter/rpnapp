(function(){

  'use strict';
  
  angular.module('rpnapp.coach')
    .config(coachRoute);

  coachRoute.$inject = ['$stateProvider'];

  function coachRoute($stateProvider){
    
    $stateProvider
      .state('app.coach', {
        url: '/coach',
        views: {
          'main@app': {
            templateUrl: 'app/person/coach.html',
            controller: 'Coach',
            controllerAs: 'coach'
          }
        }
      });
  }

})();