'use strict';

angular.module('rpnapp')
  .controller('NavbarCtrl', NavBar);

NavBar.$inject = ['pages', '$location'];

function NavBar(pages, $location){

  var vm = this; // vm = view model 
  var path = $location.path().slice(1, $location.path().length);

  vm.page = vm.page || 'Home';
  vm.pages = pages.pages;

  vm.pages.forEach(function(page){
    
    if(path === page.id){
      vm.page = page.title;
    }
    
  });   

}