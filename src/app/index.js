(function(){

  'use strict';

  angular.module('rpnapp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap'])
    .config(function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('login', {
          url: '/',
          templateUrl: 'app/login/login.html',
          controller: 'Login'
        })
        .state('coach', {
          url: '/coach',
          templateUrl: 'app/person/coach.html',
          controller: 'Coach',
          controllerAs: 'coach'
        })
        .state('ebooks', {
          url: '/ebooks',
          templateUrl: 'app/ebooks/ebooks.html',
          controller: 'Ebooks',
          controllerAs: 'ebook'
        })
        .state('videos', {
          url: '/videos',
          templateUrl: 'app/videos/videos.html',
          controller: 'Videos',
          controllerAs: 'video'
        })
        .state('new-coach', {
          url: '/new-coach',
          templateUrl: 'app/new-coach/new-coach.html',
          controller: 'NewCoach',
          controllerAs: 'newcoach'
        })
        .state('team-beachbody', {
          url: '/team-beachbody',
          templateUrl: 'app/team-beachbody/team-beachbody.html',
          controller: 'TeamBeachbody',
          controllerAs: 'tb'
        })
        .state('checklists-downloads', {
          url: '/checklists-downloads',
          templateUrl: 'app/checklists-downloads/checklists-downloads.html',
          controller: 'ChecklistsDownloads',
          controllerAs: 'cd'
        })
        .state('tips-resources', {
          url: '/tips-resources',
          templateUrl: 'app/tips-and-resources/tips-resources.html',
          controller: 'TipsResources',
          controllerAs: 'tr'
        });


      $urlRouterProvider.otherwise('/');
    });

})();