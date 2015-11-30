(function() {
  'use strict';

  angular.module('app')
    .factory('LoginModel', LoginModel);

  LoginModel.$inject = [];

  function LoginModel() {

    var model = {
      form: {
        username: '',
        password: '1122334455'
      }
    };

    return model;
  }
})();
