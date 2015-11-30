(function() {
  'use strict';

  angular.module('app')
    .factory('Users', Users);

  Users.$inject = [
    '$resource',
    'serverUrl'
  ];

  function Users(
    $resource,
    serverUrl
  ) {
    var userUrl = serverUrl + '/user' +
      '/:register' +
      '/:login';

    var params = {
      register: '@register',
      login: '@login'
    };

    var actions = {
      register: {
        method: 'POST',
        params: {
          register: 'register'
        }
      },
      login: {
        method: 'POST',
        params: {
          login: 'login'
        }
      }
    };

    var service = $resource(userUrl, params, actions);

    return service;

  }
})();
