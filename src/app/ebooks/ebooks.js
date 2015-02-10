(function(){

  'use strict';
  
  angular.module('rpnapp.ebooks', [])
    .config(ebooksRoute)
    .directive('ebookTest', function(){
      return {
        link: link
      }

      function link(scope, elem, attr){
        console.log('SCOPE', scope)
        console.log('ELEM', elem)
        console.log('attr', attr)
      }

    });

  ebooksRoute.$inject = ['$stateProvider'];

  function ebooksRoute($stateProvider){
    
    $stateProvider
      .state('ebooks', {
        url: '/ebooks',
        templateUrl: 'app/ebooks/ebooks.html',
        controller: 'Ebooks',
        controllerAs: 'ebook'
      });
  }

})();