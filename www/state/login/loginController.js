(function() {
  'use strict';
  angular.module('app')
    .controller('LoginController', LoginController);

  LoginController.$inject = [
    '$window', '$q', '$ionicPopup', '$state',
    'LoginModel', 'Users', 'appStorage'
  ];

  function LoginController(
    $window, $q, $ionicPopup, $state,
    LoginModel, Users, appStorage
  ) {
    var Login = this;
    Login.Model = LoginModel;

    Login.login = login;

    //====================================================
    //  Implementation
    //====================================================
    function login() {
      return registerDevice()
        .then(function(deviceToken) {
          //register user
          return Users.register({}, {
            username: LoginModel.form.username,
            password: LoginModel.form.password,
            deviceToken: deviceToken
          }).$promise;
        })
        .then(function() {
          return Users.login({}, {
            identifier: LoginModel.form.username,
            password: LoginModel.form.password
          }).$promise;
        })
        .then(function(authData) {
          var token = authData.token;
          appStorage.token = token;
          $state.go('postList');
        })
        .catch(function(err) {
          console.log("---------- err ----------");
          console.log(err);
          console.log("HAS TYPE: " + typeof err);

          $ionicPopup.show({
            title: '에러',
            template: '다른이름으로 로그인 해주세요.'
          });
        });
    }

    //====================================================
    //  Helper
    //====================================================
    function registerDevice() {
      var push = new $window.Ionic.Push({
        onNotification: function() {
          $window.alert('새로운 댓글이 달렸습니다.');
        }
      });
      var deferred = $q.defer();
      push.register(function(callbackData) {
        var deviceToken = callbackData._token;
        deferred.resolve(deviceToken);
      });
      return deferred.promise;
    }

  }
})();
