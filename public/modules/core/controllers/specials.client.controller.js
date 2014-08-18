
'use strict';

angular.module('core').controller('dailySpecialsCtrl', ['$scope', function ($scope) {
    
  	$scope.specials = [
    	{day: 'Monday', offer: '$3 Magic Hat drafts'},
    	{day: 'Tuesday', offer: 'Ladies Night 9pm-12am'},
    	{day: 'Wednesday', offer: 'Half-Priced Wells + $1 off Penn drafts'},
    	{day: 'Thursday', offer: '$4 Yeungling 24oz cans'},
		  {day: 'Friday', offer: '$2 Coors Light bottles'},
		  {day: 'Saturday', offer: '$2.50 Yeungling drafts'},
		  {day: 'Sunday', offer: '$3 Blue Moon'}
  	];
}]);
/*
'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication', function ($scope, Authentication) {
    $scope.authentication = Authentication;
}]);*/