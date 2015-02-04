angular.module('rpnapp')
  .controller('Videos', Videos);

  Videos.$inject = ['videoservice'];

  function Videos(pages){
    var vm = this; // vm = view model
    
    vm.videos = vm.videos || [];

    pages.getUrls()
      .then(function(data){

        var objs = JSON.parse(data);
        var thumb = '';
        var imgParams;

        angular.forEach(objs, function(obj){
          thumb = obj.thumbnail.url;
          imgParams = '?image_play_button=true&image_resize=960';

          // Remove query parameters so we can use thumbnail full image
          obj.thumbnail.url = thumb.slice(0, thumb.indexOf('?')) + imgParams
          
          angular.forEach(obj.assets, function(asset){
            if(asset.contentType === 'video/mp4'){
              obj.videoUrl = asset.url;
            }
          });

        });
        console.log(objs)
        vm.videos = objs;
      });
  }