'use strict';

angular.module('core').controller('penguinsScheduleCtrl', ['$scope', function($scope) {

    $scope.games = [
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