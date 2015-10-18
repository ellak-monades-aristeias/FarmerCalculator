angular.module('FarmCalcModule', ['ionic'])

.run(
['$ionicPlatform',
function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}])

.config(
['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
  $stateProvider
    //state is used with ui-sref="home"
    //url is used with href="#/home"
    .state('potisma', {
      url: "/potisma",
      templateUrl: "views/potisma.html",
      controller: 'PotismaController'
    })
    .state('sporaMeKila', {
      url: "/sporaMeKila",
      templateUrl: "views/sporaMeKila.html",
      controller: 'SporaMeKilaController'
    })
    .state('sporaMeGrammes', {
      url: "/sporaMeGrammes",
      templateUrl: "views/sporaMeGrammes.html",
      controller: 'SporaMeGrammesController'
    })
    .state('sigkomidi', {
      url: "/sigkomidi",
      templateUrl: "views/sigkomidi.html",
      controller: 'SigkomidiController'
    })
    .state('granaziaGrammes', {
      url: "/granaziaGrammes",
      templateUrl: "views/granaziaGrammes.html",
      controller: 'GranaziaGrammesController'
    })
    .state('granaziaKila', {
      url: "/granaziaKila",
      templateUrl: "views/granaziaKila.html",
      controller: 'GranaziaKilaController'
    })
    .state('lipansh', {
      url: "/lipansh",
      templateUrl: "views/lipansh.html",
      controller: 'LipanshController'
    })
    .state('psekasmos', {
      url: "/psekasmos",
      templateUrl: "views/psekasmos.html",
      controller: 'PsekasmosController'
    });

   $urlRouterProvider.otherwise("/potisma");
}])
