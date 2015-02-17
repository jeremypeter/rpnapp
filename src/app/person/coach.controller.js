(function(){
  'use strict';

  angular.module('rpnapp')
    .controller('Coach', Coach);

  Coach.$inject = ['navService'];

  function Coach(navService){
    var vm = this; // vm = view model

    vm.pages = vm.pages || [];
    navService.getUrls()
      .then(function(data){
        vm.pages = data;
      });
  }

})();