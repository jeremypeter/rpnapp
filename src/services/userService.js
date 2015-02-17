(function(){

  angular.module('rpnapp')
    .service('userService', User);

  User.$inject = [];

  function User(){
    
    var vm = this; // vm = view model
    
    return {
      isLogged: false,
      username: null
    };
  }
  
})();