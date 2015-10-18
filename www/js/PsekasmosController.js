angular.module('FarmCalcModule')  //Here we must not use ionic.

.controller('PsekasmosController',
['$scope', '$ionicPopup',
function($scope, $ionicPopup) {
  
  $scope.data = {
    'totalArea': '',
    'farmakoPerWater': '',
    'weightPerArea': '',
    'water': '',
    'farmako': ''
  };
  
  $scope.calculate = function() {
    //Ckeck that only two out of the three field are filled.
    var emptyFields = 0;
    if($scope.data.totalArea != '') {
      emptyFields++;
    }
    if($scope.data.farmakoPerWater != '') {
      emptyFields++;
    }
    if($scope.data.weightPerArea != '') {
      emptyFields++;
    }
    if (emptyFields!=3) {
      $ionicPopup.alert({
        title: 'Πρόβλημα',
        template: 'Συμπληρώστε μόνα τα 3 πρώτα πεδία, πατήστε υπολογισμός και θα εμφανιστεί τα υπόλοιπα.'
      });
      return;
    }
    
    //Only the two of the three fields are given.
    if ($scope.data.totalArea!='' && $scope.data.farmakoPerWater != '' && $scope.data.weightPerArea != '') {
      //Check that the field have the correct format.
      if(!/^\d+(\.\d+)?$/.test($scope.data.totalArea)) {
        $ionicPopup.alert({
          title: 'Πρόβλημα',
          template: 'Τα συνολικά στρέμματα πρέπει να περιέχουν μόνο αριθμούς.'
        });
        return;
      }
      if(!/^\d+(\.\d+)?$/.test($scope.data.farmakoPerWater)) {
        $ionicPopup.alert({
          title: 'Πρόβλημα',
          template: 'Η αναλογία φαρμάκου ανά νερού πρέπει να περιέχει μόνο αριθμούς.'
        });
        return;
      }
      if(!/^\d+(\.\d+)?$/.test($scope.data.weightPerArea)) {
        $ionicPopup.alert({
          title: 'Πρόβλημα',
          template: 'Η αναλογία μείγματος ανά στρέμμα πρέπει να περιέχει μόνο αριθμούς.'
        });
        return;
      }
      
      var totalWeight = $scope.data.totalArea * $scope.data.weightPerArea;
      $scope.data.water = totalWeight * (1 - $scope.data.farmakoPerWater);
      $scope.data.farmako  = totalWeight * $scope.data.farmakoPerWater;
    }
  }
}])
