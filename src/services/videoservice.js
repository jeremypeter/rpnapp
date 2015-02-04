angular.module('rpnapp')
  .service('videoservice', Videos);

Videos.$inject = ['$http', '$q'];

function Videos($http, $q){
  // vm = view model
  var vm = this;

  vm.getUrls = function(){
    var deferred = $q.defer();

    $http.get('http://localhost:3000/api/wistia')
      .then(function(res){
        deferred.resolve(res.data);
      })
      .catch(function(err){
        console.log(err);
      })

    return deferred.promise;
  };
  
}