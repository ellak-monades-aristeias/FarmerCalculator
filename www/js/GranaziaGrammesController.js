angular.module('FarmCalcModule')  //Here we must not use ionic.

.controller('GranaziaGrammesController',
['$scope', '$ionicPopup',
function($scope, $ionicPopup) {

  $scope.data = {
    'totalArea': '',
    'seedsPerArea': '',
    'sxesh': ''
  };

  $scope.calculate = function() {
    //Ckeck that only two out of the three field are filled.
    var emptyFields = 0;
    if($scope.data.totalArea != '') {
      emptyFields++;
    }
    if($scope.data.seedsPerArea != '') {
      emptyFields++;
    }
    if (emptyFields!=2) {
      $ionicPopup.alert({
        title: 'Πρόβλημα',
        template: 'Συμπληρώστε τα 2 πρώτα πεδία, πατήστε υπολογισμός και θα εμφανιστεί το τρίτο.'
      });
      return;
    }

    //Only the two of the three fields are given.
    if ($scope.data.totalArea!='' && $scope.data.seedsPerArea != '') {
      //Check that the field have the correct format.
      if(!/^\d+(\.\d+)?$/.test($scope.data.totalArea)) {
        $ionicPopup.alert({
          title: 'Πρόβλημα',
          template: 'Τα συνολικά στρέμματα πρέπει να περιέχουν μόνο αριθμούς.'
        });
        return;
      }
      if(!/^\d+(\.\d+)?$/.test($scope.data.seedsPerArea)) {
        $ionicPopup.alert({
          title: 'Πρόβλημα',
          template: 'Το πλήθος σπόρων ανά μονάδα επιφάνειας πρέπει να περιέχει μόνο αριθμούς.'
        });
        return;
      }

      $scope.data.sxesh = 1000*($scope.data.totalArea / $scope.data.seedsPerArea);
    }
  }
}])
