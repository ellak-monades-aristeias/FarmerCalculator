angular.module('FarmCalcModule')  //Here we must not use ionic.

.controller('SporaMeGrammesController',
['$scope', '$ionicPopup',
function($scope, $ionicPopup) {
  
  $scope.data = {
    'totalLines': '',
    'totalLength': '',
    'gapBetweenLines': ''
  };
  
  $scope.calculate = function() {
    //Ckeck that only two out of the three field are filled.
    var emptyFields = 0;
    if($scope.data.totalLines != '') {
      emptyFields++;
    }
    if($scope.data.totalLength != '') {
      emptyFields++;
    }
    if($scope.data.gapBetweenLines != '') {
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
    //totalLength/totalLines = gapBetweenLines.
    if ($scope.data.totalLength!='' && $scope.data.totalLines != '') {
      //Check that the field have the correct format.
      if(!/^\d+(\.\d+)?$/.test($scope.data.totalLength)) {
        $ionicPopup.alert({
          title: 'Πρόβλημα',
          template: 'Το συνολικό μήκος πρέπει να περιέχει μόνο αριθμούς.'
        });
        return;
      }
      if(!/^\d+(\.\d+)?$/.test($scope.data.totalLines)) {
        $ionicPopup.alert({
          title: 'Πρόβλημα',
          template: 'Οι συνολικές γραμμές πρέπει να περιέχουν μόνο αριθμούς.'
        });
        return;
      }
      
      $scope.data.gapBetweenLines = $scope.data.totalLength / $scope.data.totalLines;
    } else {
      //Check that the field have the correct format.
      if(!/^\d+(\.\d+)?$/.test($scope.data.gapBetweenLines)) {
        $ionicPopup.alert({
          title: 'Πρόβλημα',
          template: 'Η απόσταση ανάμεσα στις γραμμές πρέπει να περιέχει μόνο αριθμούς.'
        });
        return;
      }
      
      if($scope.data.totalLength!='') {
        //Check that the field have the correct format.
        if(!/^\d+(\.\d+)?$/.test($scope.data.totalLength)) {
          $ionicPopup.alert({
            title: 'Πρόβλημα',
            template: 'Το συνολικό μήκος πρέπει να περιέχει μόνο αριθμούς.'
          });
          return;
        }
      
        $scope.data.totalLines = $scope.data.totalLength / $scope.data.gapBetweenLines;
      } else {
        //Check that the field have the correct format.
        if(!/^\d+(\.\d+)?$/.test($scope.data.totalLines)) {
          $ionicPopup.alert({
            title: 'Πρόβλημα',
            template: 'Οι συνολικές γραμμές πρέπει να περιέχουν μόνο αριθμούς.'
          });
          return;
        }
        
        $scope.data.totalLength = $scope.data.totalLines * $scope.data.gapBetweenLines;
      }
    }
  }
}])
