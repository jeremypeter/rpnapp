(function(){

  'use strict';
  
  angular.module('rpnapp.base')
    .config(baseRoute)

  baseRoute.$inject = ['$stateProvider'];

  function baseRoute($stateProvider){
    
    $stateProvider
      .state('app', {
        abstract: true,
        url: '',
        templateUrl: 'app/base/base.html'
      });
  }

})();