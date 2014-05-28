'use strict';

angular.module('core').controller('CarouselDemoCtrl', ['$scope', function ($scope) {
    $scope.myInterval = 6000;
  	$scope.slides = [
    	{image: '/modules/core/img/slide2a.jpg'/*,text: '2856 Broadway in Dormont, PA.'*/},
    	{image: '/modules/core/img/slide3a.jpg'/*,text: '20+ Taps of Fresh Beer'*/},
    	{image: '/modules/core/img/slide4a.jpg'/*,text: 'Live Sports + Specials'*/},
    	{image: '/modules/core/img/slide5a.jpg'/*,text: 'Specials all Weekday & Weekend'*/},
    	{image: '/modules/core/img/slide6a.jpg'/*,text: 'Entertainment'*/},
		{image: '/modules/core/img/slide7a.jpg'/*,text: 'Entertainment'*/}
  	];
}]);
/*
'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication', function ($scope, Authentication) {
    $scope.authentication = Authentication;
}]);*/