(function() {
  'use strict';

  angular.module('app')
    .factory('AuthInterceptor', AuthInterceptor);

  AuthInterceptor.$inject = ['appStorage'];

  function AuthInterceptor(appStorage) {

    var service = {
      request: request
    };

    return service;

    function request(req) {
      var token = appStorage.token;
      if (token && !req.headers.Authorization) {
        req.headers.Authorization = 'Bearer ' + token;
      }

      return req;
    }
  }
})();
