(function(){

  angular.module('rpnapp')
    .service('sessionService', sessionService);

  sessionService.$inject = ['$http', 'Session'];

  function sessionService($http, Session){

    var vm = this; // view model

    vm.create = function (sessionId, userId, userRole) {
      vm.id = sessionId;
      vm.userId = userId;
      vm.userRole = userRole;
    };
    vm.destroy = function () {
      vm.id = null;
      vm.userId = null;
      vm.userRole = null;
    };

    return vm;
    
  }
  
})();