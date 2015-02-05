angular.module('rpnapp')
  .service('videoservice', Videos);

Videos.$inject = ['$http'];

function Videos($http){
  
  var vm = this; // vm = view model
  vm.getData = getData;


  ////////////////////////////////////
  // Function Declarations
  ////////////////////////////////////

  function getData(){
    
    return $http.get('http://localhost:3000/api/wistia')
      .then(getDataComplete)
      .catch(getDataFail)
  };

  function getDataComplete(res){
    return res.data;
  }

  function getDataFail(err){
    console.log(err);
  }
  
}