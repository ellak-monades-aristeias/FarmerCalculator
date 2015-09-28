angular.module('FarmCalcModule')  //Here we must not use ionic.

.controller('SigkomidiController',
['$scope', '$ionicPopup',
function($scope, $ionicPopup) {
  
  $scope.data = {
    'totalArea': '',
    'totalWeight': '',
    'weightPerArea': ''
  };
  
  $scope.calculate = function() {
    //Ckeck that only two out of the three field are filled.
    var emptyFields = 0;
    if($scope.data.totalArea != '') {
      emptyFields++;
    }
    if($scope.data.totalWeight != '') {
      emptyFields++;
    }
    if($scope.data.weightPerArea != '') {
      emptyFields++;
    }
    if (emptyFields==3) {
      $ionicPopup.alert({
        title: 'Πρόβλημα',
        template: 'Συμπληρώστε μόνο τα 2 από τα 3 πεδία, πατήστε υπολογισμός και θα εμφανιστεί το τρίτο.'
      });
      return;
    }
    if (emptyFields!=2) {
      $ionicPopup.alert({
        title: 'Πρόβλημα',
        template: 'Συμπληρώστε τα 2 από τα 3 πεδία, πατήστε υπολογισμός και θα εμφανιστεί το τρίτο.'
      });
      return;
    }
      
    //Only the two of the three fields are given.
    //The formula is:
    //totalWeight/totalArea = weightPerArea.
    if ($scope.data.totalArea!='' && $scope.data.totalWeight != '') {
      //Check that the field have the correct format.
      if(!/^\d+(\.\d+)?$/.test($scope.data.totalArea)) {
        $ionicPopup.alert({
          title: 'Πρόβλημα',
          template: 'Τα συνολικά στρέμματα πρέπει να περιέχουν μόνο αριθμούς.'
        });
        return;
      }
      if(!/^\d+(\.\d+)?$/.test($scope.data.totalWeight)) {
        $ionicPopup.alert({
          title: 'Πρόβλημα',
          template: 'Τα συνολικά κιλά πρέπει να περιέχουν μόνο αριθμούς.'
        });
        return;
      }
      
      $scope.data.weightPerArea = $scope.data.totalWeight / $scope.data.totalArea;
    } else {
      //Check that the field have the correct format.
      if(!/^\d+(\.\d+)?$/.test($scope.data.weightPerArea)) {
        $ionicPopup.alert({
          title: 'Πρόβλημα',
          template: 'Τα κιλά ανά στρέμμα πρέπει να περιέχουν μόνο αριθμούς.'
        });
        return;
      }
      
      if($scope.data.totalArea!='') {
        //Check that the field have the correct format.
        if(!/^\d+(\.\d+)?$/.test($scope.data.totalArea)) {
          $ionicPopup.alert({
            title: 'Πρόβλημα',
            template: 'Τα συνολικά στρέμματα πρέπει να περιέχουν μόνο αριθμούς.'
          });
          return;
        }
      
        $scope.data.totalWeight = $scope.data.weightPerArea * $scope.data.totalArea;
      } else {
        //Check that the field have the correct format.
        if(!/^\d+(\.\d+)?$/.test($scope.data.totalWeight)) {
          $ionicPopup.alert({
            title: 'Πρόβλημα',
            template: 'Τα συνολικά κιλά πρέπει να περιέχουν μόνο αριθμούς.'
          });
          return;
        }
        
        $scope.data.totalArea = $scope.data.totalWeight / $scope.data.weightPerArea;
      }
    }
  }
}])
