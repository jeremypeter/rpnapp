angular.module('rpnapp')
  .controller('Coach', Coach);

  Coach.$inject = ['pages'];

  function Coach(pages){
    return pages;
  }