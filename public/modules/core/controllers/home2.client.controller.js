'use strict';

angular.module('core').controller('HomeController', ['$scope', '$sce', 'homepageService', function ($scope, $sce, homepageService) {
    
	$scope.trustSrc = function(src) {
	return $sce.trustAsResourceUrl(src);
	};
	
    
  	$scope.homepageContent = {};
  	try {
  	  $scope.homepageContent = homepageService.getContent();
  	} catch (error) {
  	  console.error(error);
  	}
}]);
/*
'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication', function ($scope, Authentication) {
    $scope.authentication = Authentication;
}]);*/