angular.module('FarmCalcModule')  //Here we must not use ionic.

.controller('LipanshController',
['$scope', '$ionicPopup',
function($scope, $ionicPopup) {

  $scope.data = {
    'totalArea': '',
    'lipasmaWeight': '',
    'speed': '',
    'open': ''
  };

  $scope.calculate = function() {
    //Ckeck that only two out of the three field are filled.
    var emptyFields = 0;
    if($scope.data.totalArea != '') {
      emptyFields++;
    }
    if($scope.data.lipasmaWeight != '') {
      emptyFields++;
    }
    if (emptyFields!=2) {
      $ionicPopup.alert({
        title: 'Πρόβλημα',
        template: 'Συμπληρώστε τα 2 πρώτα πεδία, πατήστε υπολογισμός και θα εμφανιστούν τα δύο τελευταία.'
      });
      return;
    }

    //Only the two of the three fields are given.
    if ($scope.data.totalArea!='' && $scope.data.lipasmaWeight != '') {
      //Check that the field have the correct format.
      if(!/^\d+(\.\d+)?$/.test($scope.data.totalArea)) {
        $ionicPopup.alert({
          title: 'Πρόβλημα',
          template: 'Τα συνολικά στρέμματα πρέπει να περιέχουν μόνο αριθμούς.'
        });
        return;
      }
      if(!/^\d+(\.\d+)?$/.test($scope.data.lipasmaWeight)) {
        $ionicPopup.alert({
          title: 'Πρόβλημα',
          template: 'Τα συνολικά κιλά λιπάσματος πρέπει να περιέχουν μόνο αριθμούς.'
        });
        return;
      }

      $scope.data.speed = 100 * ($scope.data.totalArea / ($scope.data.lipasmaWeight*3.14));
      $scope.data.open  = ($scope.data.totalArea / $scope.data.lipasmaWeight) / 10;
    }
  }
}])
