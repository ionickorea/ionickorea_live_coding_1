(function() {
  'use strict';

  angular.module('app')
    .factory('appStorage', appStorage);

  appStorage.$inject = ['$localStorage', 'appName'];

  function appStorage($localStorage, appName) {

    if (!$localStorage[appName]) {
      $localStorage[appName] = {
        isFirstTime: true
      };
    }

    return $localStorage[appName];

  }
})();
