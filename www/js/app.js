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
      if ($window.cordova && $window.cordova.plugins.Keyboard) {
        $window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if ($window.StatusBar) {
        $window.StatusBar.styleDefault();
      }
    });
  }
})();
