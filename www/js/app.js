// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngMap', 'ngCordova', 'ngRoute'])

//var db = null;

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(false);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    //db = $cordovaSQLite.openDB("my.db");
      
   
        
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/login.html',
          controller: 'AppCtrl'
        }
      }
    })
  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })
  .state('app.laporan', {
      url: '/laporan',
      views: {
        'menuContent': {
          templateUrl: 'templates/laporan.html',
          controller: 'laporanCtrl'
        }
      }
    })
    .state('app.detailPromo', {
         url: '/hotpromo/:idpromo',
         views: {
           'menuContent': {
             templateUrl: 'templates/detailPromo.html'
           }
         }
       })
      .state('app.peta', {
             url: '/peta',
             views: {
               'menuContent': {
                 templateUrl: 'templates/peta.html',
                 controller: 'MapCtrl'
               }
             }
           })
    .state('app.notification', {
      url: '/notification',
      views: {
        'menuContent': {
          templateUrl: 'templates/notification.html',
          controller: 'notificationCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/notification/:id_laporan',
    views: {
      'menuContent': {
        templateUrl: 'templates/detailLap.html',
        controller: 'detailLapCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
