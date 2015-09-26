angular.module('FarmCalcModule')  //Here we must not use ionic.

.controller('PotismaController',
['$scope', '$ionicPopup',
function($scope, $ionicPopup) {
  
  $scope.data = {
    'totalLength': '',
    'metersPerMinute': '',
    'totalTime': ''
  };
  
  $scope.calculate = function() {
    //Ckeck that only two out of the three field are filled.
    var emptyFields = 0;
    if($scope.data.totalLength != '') {
      emptyFields++;
    }
    if($scope.data.metersPerMinute != '') {
      emptyFields++;
    }
    if($scope.data.totalTime != '') {
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
    //totalLength/totalTime = metersPerMinute.
    if ($scope.data.totalLength!='' && $scope.data.metersPerMinute != '') {
      //Check that the field have the correct format.
      if(!/^\d+(\.\d+)?$/.test($scope.data.totalLength)) {
        $ionicPopup.alert({
          title: 'Πρόβλημα',
          template: 'Η συνολική απόσταση πρέπει να περιέχει μόνο αριθμούς.'
        });
        return;
      }
      if(!/^\d+(\.\d+)?$/.test($scope.data.metersPerMinute)) {
        $ionicPopup.alert({
          title: 'Πρόβλημα',
          template: 'Τα μέτρα ανά λεπτό πρέπει να περιέχει μόνο αριθμούς.'
        });
        return;
      }
      
      var timeInMinutes = $scope.data.totalLength / $scope.data.metersPerMinute;
      var timeInSeconds = Math.ceil(timeInMinutes * 60);
      $scope.data.totalTime = Math.floor(timeInSeconds/60) + ':' + (timeInSeconds%60);
    } else {
      //Check that the field have the correct format.
      if(!/^\d+(:\d+)?$/.test($scope.data.totalTime)) {
        $ionicPopup.alert({
          title: 'Πρόβλημα',
          template: 'Ο συνολικός χρόνος πρέπει να είναι στην μορφή λεπτά:δευτερόλεπτα.'
        });
        return;
      }
      
      //The time is given in the form minutes:seconds. Convert it to decimal.
      var strParts = $scope.data.totalTime.split(':');
      if (strParts.length > 2) {
        $ionicPopup.alert({
          title: 'Πρόβλημα',
          template: 'Ο συνολικός χρόνος πρέπει να είναι στην μορφή λεπτά:δευτερόλεπτα.'
        });
        return;
      }
      var minutes = 0;
      var seconds = 0;
      if (strParts.length == 1) {
        //Only the minutes is given.
        minutes = parseInt(strParts[0]);
      } else{
        //Both the minutes and seconds are given.
        minutes = parseInt(strParts[0]);
        seconds = parseInt(strParts[1]);
      }
      var totalMinutes = (minutes+seconds/60.0);
      
      if($scope.data.totalLength!='') {
        //Check that the field have the correct format.
        if(!/^\d+(\.\d+)?$/.test($scope.data.totalLength)) {
          $ionicPopup.alert({
            title: 'Πρόβλημα',
            template: 'Η συνολική απόσταση πρέπει να περιέχει μόνο αριθμούς.'
          });
          return;
        }
      
        $scope.data.metersPerMinute = $scope.data.totalLength / totalMinutes;
      } else {
        //Check that the field have the correct format.
        if(!/^\d+(\.\d+)?$/.test($scope.data.metersPerMinute)) {
          $ionicPopup.alert({
            title: 'Πρόβλημα',
            template: 'Τα μέτρα ανά λεπτό πρέπει να περιέχει μόνο αριθμούς.'
          });
          return;
        }
        
        $scope.data.totalLength = $scope.data.metersPerMinute * totalMinutes;
      }
    }
  }
}])
