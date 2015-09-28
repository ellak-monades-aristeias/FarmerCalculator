angular.module('FarmCalcModule') //Here we must not use ionic.

.controller('SideController',
['$scope', '$ionicSideMenuDelegate',
function($scope, $ionicSideMenuDelegate) {

  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
}])
