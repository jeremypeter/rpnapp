angular.module('rpnapp')
  .controller('Ebooks', Ebooks);

  Ebooks.$inject = [];

  function Ebooks(){
    
    // vm = view model
    var vm = this;

    vm.ebooks = [
      {
        title: 'Title One',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis explicabo, itaque ratione dolores enim nesciunt. Dolor dicta officia et, quod, voluptatibus ipsa at numquam eum velit quae obcaecati soluta accusamus.',
        index: null
      },
      {
        title: 'Title Two',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis explicabo, itaque ratione dolores enim nesciunt. Dolor dicta officia et, quod, voluptatibus ipsa at numquam eum velit quae obcaecati soluta accusamus.',
        index: null
      },
      {
        title: 'Title Three',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis explicabo, itaque ratione dolores enim nesciunt. Dolor dicta officia et, quod, voluptatibus ipsa at numquam eum velit quae obcaecati soluta accusamus.',
        index: null
      }
    ];

    // Add index to `ebooks.index`
    angular.forEach(vm.ebooks, function(ebook, index){
      ebook.index = index;
    })
    
  }