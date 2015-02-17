(function(){

  'use strict';
  
  angular.module('rpnapp.ebooks')
    .config(ebooksRoute)

  ebooksRoute.$inject = ['$stateProvider'];

  function ebooksRoute($stateProvider){
    
    $stateProvider
      .state('app.ebooks', {
        url: '/ebooks',
        views: {
          'main@app': {
            templateUrl: 'app/ebooks/ebooks.html',
            controller: 'Ebooks',
            controllerAs: 'ebook'
          }
        }
      });
  }

})();