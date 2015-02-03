angular.module('rpnapp')
  .controller('Coach', Coach);

  Coach.$inject = ['pages'];

  function Coach(pages){
    var vm = this; // vm = view model

    vm.pages = vm.pages || [];
    pages.getUrls()
      .then(function(data){
        vm.pages = data;
      });
  }