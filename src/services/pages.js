angular.module('rpnapp')
  .service('pages', Urls);

function Urls(){
  // vm = view model
  var vm = this;

  vm.pages = [

    {
      title: 'Ebooks',
      id: 'ebooks',
      index: null
    },
    {
      title: 'Videos',
      id: 'videos',
      index: null
    },
    {
      title: 'New Coaches Start Here',
      id: 'new-coaches',
      index: null
    },
    {
      title: 'Tips and Resources',
      id: 'tips-resources',
      index: null
    },
    {
      title: 'Team Beachbody',
      id: 'team-beachbody',
      index: null
    },
    {
      title: 'Checklists and Downloads',
      id: 'checklists-downloads',
      index: null
    }
  ];

  // Add index to `pages.index`
  angular.forEach(vm.pages, function(page, index){
    page.index = index;
  });
}