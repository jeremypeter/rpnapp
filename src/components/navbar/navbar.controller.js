(function(){

  'use strict';

  angular.module('rpnapp')
    .controller('NavbarCtrl', NavBar);

  NavBar.$inject = ['navService', '$location'];

  function NavBar(navService, $location){

    var vm = this; // vm = view model 
    var path = $location.path().slice(1, $location.path().length);

    vm.page = vm.page || 'Home';
    vm.pages = vm.pages || [];

    navService.getUrls()
      .then(function(data){
        
        vm.pages = data;

        data.forEach(function(page){

          if(path === page.id){
            vm.page = page.title;
          }

        });     
      });
  }

})();