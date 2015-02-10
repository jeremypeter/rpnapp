(function(){

  'use strict';
  
  angular.module('rpnapp.videos', [])
    .config(videosRoute);

  videosRoute.$inject = ['$stateProvider'];

  function videosRoute($stateProvider){
    
    $stateProvider
      .state('videos', {
        url: '/videos',
        templateUrl: 'app/videos/videos.html',
        controller: 'Videos',
        controllerAs: 'videos'
      });
  }

})();