angular.module('app').controller("MainController", function(){
  var vm = this;
  vm.title = 'My Favorite Shows!';
  vm.searchInput = '';
  vm.shows = [
    {
      title: 'Breaking Bad',
      year: 2008,
      rating: 9.4,
      favorite: true
    },
    {
      title: 'Sherlock',
      year: 2010,
      rating: 9.2,
      favorite: true
    },
    {
      title: 'House of Cards',
      year: 2013,
      rating: 9.0,
      favorite: true
    },
    {
      title: 'True Detective',
      year: 2014,
      rating: 9.1,
      favorite: true
    },
    {
      title: 'Last Week Tonight with John Oliver',
      year: 2014,
      rating: 9.1,
      favorite: true
    },
    {
      title: 'Better Call Saul',
      year: 2015,
      rating: 8.7,
      favorite: false
    },
    {
      title: 'Narcos',
      year: 2015,
      rating: 8.9,
      favorite: true
    }
  ];
vm.orders = [
  {
    id: 1,
    title: 'Year Ascending',
    key: 'year',
    reverse: false
  },
  {
    id: 2,
    title: 'Year Descending',
    key: 'year',
    reverse: true
  },
  {
    id: 3,
    title: 'Title Ascending',
    key: 'title',
    reverse: false
  },
  {
    id: 4,
    title: 'Title Descending',
    key: 'title',
    reverse: true
  }
];
vm.order = vm.orders[0];
vm.new = {};
vm.addShow = function() {
  vm.shows.push(vm.new);
  vm.new = {};
};
});
