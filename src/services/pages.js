angular.module('rpnapp')
  .service('pages', Urls);

Urls.$inject = ['$http', '$q'];

function Urls($http, $q){
  // vm = view model
  var vm = this;

  vm.getUrls = function(){
    var deferred = $q.defer();

    $http.get('../json/pages.json')
      .then(function(res){

        // Add index to `pages.index`
        angular.forEach(res.data, function(page, index){
          page.index = index;
        });

        deferred.resolve(res.data);
      });

    return deferred.promise;
  };
  
}