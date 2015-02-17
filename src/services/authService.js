(function(){

  angular.module('rpnapp')
    .factory('authService', authService);

  authService.$inject = ['$http', 'Session'];

  function authService($http, Session){

    return {
      login: login
      isAuthenticated: isAuthenticated,
      isAuthorized: isAuthorized
    };

    function login(data){
      return $http({
        method: 'POST',
        url: 'http://localhost:3000/login',
        data: data,
        headers: { 'Content-Type': 'application/json'}
      })
      .then(function(res){
        return res.data;
      })
      .catch(function(err){
        console.log('ERROR', err);
      });
    }

    function isAuthenticated(){
      return !!Session.userId;
    }

    function isAuthorized(authorizedRoles){
      if (!angular.isArray(authorizedRoles)) {
        authorizedRoles = [authorizedRoles];
      }

      return (isAuthenticated() &&
        authorizedRoles.indexOf(Session.userRole) !== -1);
    }
    
  }
  
})();