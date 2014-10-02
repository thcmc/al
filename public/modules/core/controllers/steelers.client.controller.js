'use strict';

angular.module('core').controller('steelersScheduleCtrl', ['$scope', function($scope) {
    
    $scope.items = [
      {no: '1', title: 'Victoria\'s Secret Women\'s Steelers T-Shirt', url:'http://www.amazon.com/gp/product/B00FOJ56JM/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00FOJ56JM&linkCode=as2&tag=albslou-20&linkId=GJ2NL6ST4WU2NW56', img: 'http://ir-na.amazon-adsystem.com/e/ir?t=albslou-20&l=as2&o=1&a=B00FOJ56JM'},
      {no: '2', title: 'NFL Pittsburgh Steelers Sunglasses', url:'http://www.amazon.com/gp/product/B000LGL7BY/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000LGL7BY&linkCode=as2&tag=albslou-20&linkId=BNRUJLVZ3MPG4T6H', img: 'http://ir-na.amazon-adsystem.com/e/ir?t=albslou-20&l=as2&o=1&a=B000LGL7BY'},
      {no: '4', title: 'Rum Runner Stadium Special', url:'http://www.amazon.com/gp/product/B000IUT5BM/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B000IUT5BM&linkCode=as2&tag=albslou-20&linkId=APNUM5DPBVZRP6QP', img: 'http://ir-na.amazon-adsystem.com/e/ir?t=albslou-20&l=as2&o=1&a=B000IUT5BM', where: 'none'},
      {no: '5', title: 'Coleman Pack-Away Outdoor 4-in-1 Table', url:'http://www.amazon.com/gp/product/B00GVK7YT8/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00GVK7YT8&linkCode=as2&tag=albslou-20&linkId=SR7RM2253HQDARPF', img: 'http://ir-na.amazon-adsystem.com/e/ir?t=albslou-20&l=as2&o=1&a=B00GVK7YT8', where: 'none'}
    ];
  	
    $scope.games = [
    	// {wk: '1', date: 'Sun 9/7', opponent: 'Cleveland', time:'1:00 PM CBS', where: 'home'},
    	// {wk: '2', date: 'Thu 9/11', opponent: 'Baltimore', time:'8:25 PM CBS/NFL', where: 'away'},
    	// {wk: '3', date: 'Sun 9/21', opponent: 'Carolina', time:'8:30 PM NBC', where: 'away'},
    	// {wk: '4', date: 'Sun 9/28', opponent: 'Tampa Bay', time:'1:00 PM FOX', where: 'home'},
		  {wk: '5', date: 'Sun 10/5', opponent: 'Jacksonville', time:'1:00 PM CBS', where: 'away'},
		  {wk: '6', date: 'Sun 10/12', opponent: 'Cleveland', time:'1:00 PM CBS', where: 'away'},
		  {wk: '7', date: 'Mon 10/20', opponent: 'Houston', time:'8:30 PM ESPN/WatchESPN', where: 'home'},
      {wk: '8', date: 'Sun 10/26', opponent: 'Indianapolis', time:'4:25 PM CBS', where: 'home'},
      {wk: '9', date: 'Sun 11/2', opponent: 'Baltimore', time:'8:30 PM NBC', where: 'home'},
      {wk: '10', date: 'Sun 11/9', opponent: 'New York', time:'1:00 PM CBS', where: 'away'},
      {wk: '11', date: 'Mon 11/17', opponent: 'Tennessee', time:'8:30 PM ESPN/W', where: 'away'},
      {wk: '12', date: '', opponent: 'BYE WEEK', time:'', where: ''},
      {wk: '13', date: 'Sun 11/30', opponent: 'New Orleans', time:'1:00 PM FOX', where: 'home'},
      {wk: '14', date: 'Sun 12/7', opponent: 'Cincinnati', time:'1:00 PM CBS', where: 'away'},
      {wk: '15', date: 'Sun 12/14', opponent: 'Atlanta', time:'1:00 PM CBS', where: 'away'},
      {wk: '16', date: 'Sun 12/21', opponent: 'Kansas City', time:'1:00 PM CBS', where: 'home'},
      {wk: '17', date: 'Sun 12/28', opponent: 'Cincinnati', time:'1:00 PM CBS', where: 'home'}
  	];
}]);