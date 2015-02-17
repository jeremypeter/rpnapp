(function(){

  'use strict';
  
  angular.module('rpnapp.videos')
    .config(videosRoute);

  videosRoute.$inject = ['$stateProvider'];

  function videosRoute($stateProvider){
    
    $stateProvider
      .state('app.videos', {
        url: '/videos',
        views: {
          'main@app': {
            templateUrl: 'app/videos/videos.html',
            controller: 'Videos',
            controllerAs: 'videos'
          }
        }
      });
  }

})();