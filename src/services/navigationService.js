(function(){
  angular.module('rpnapp')
    .service('navService', Navigation);

  Navigation.$inject = ['$http'];

  function Navigation($http){
    // vm = view model
    var vm = this;

    vm.getUrls = function(){

      return $http.get('../json/pages.json')
        .then(function(res){

          // Add index to `pages.index`
          angular.forEach(res.data, function(page, index){
            page.index = index;
          });

          return res.data;

        });
    };
    
  }
})();