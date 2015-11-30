(function() {
  'use strict';
  angular.module('app')
    .controller('LoginController', LoginController);

  LoginController.$inject = [
    'LoginModel'
  ];

  function LoginController(
    LoginModel
  ) {
    var Login = this;
    Login.Model = LoginModel;


  }
})();
