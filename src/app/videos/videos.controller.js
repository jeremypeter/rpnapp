(function(){

  'use strict';

  angular.module('rpnapp.videos')
    .controller('Videos', Videos);

  Videos.$inject = ['videoservice'];

  function Videos(videoservice){
    var vm = this; // vm = view model
    
    vm.videos = vm.videos || [];

    videoservice.getData()
      .then(function(json){
        
        var items = JSON.parse(json);
        var imgParams = '?image_play_button=true&image_resize=960';

        angular.forEach(items, function(item){

          // Remove query parameters so we can use thumbnail full image
          item.thumbnail.url = cleanUrl(item.thumbnail.url) + imgParams
          
          angular.forEach(item.assets, function(asset){
            if(asset.contentType === 'video/mp4'){
              item.videoUrl = asset.url;
            }
          });

        });
        console.log(items)
        vm.videos = items;
      });
  }



  /*
  * Removes query parameters from url
  * 
  * @param {String} url
  *
  * @returns {String} url with query parameters removed
  */

  function cleanUrl(url){
    var queryIdx = url.indexOf('?');
    return (queryIdx !== -1) ? url.slice(0, queryIdx) : url;
  }


})();