(function() {
  'use strict';
  angular.module('app', [
    'ionic',
    'ngResource',
    'ngStorage'
  ])
    .run(init);

  function init($ionicPlatform, $window) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if ($window.cordova && $window.cordova.plugins.Keyboard) {
        $window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if ($window.StatusBar) {
        $window. // org.apache.cordova.statusbar required
        $window.StatusBar.styleDefault();
      }
    });
  }
})();
