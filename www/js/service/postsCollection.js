(function() {
  'use strict';

  angular.module('app')
    .factory('Posts', Posts);

  Posts.$inject = ['$resource', 'serverUrl'];

  function Posts($resource, serverUrl) {
    var postUrl = serverUrl + '/post' +
      '/:create' +
      '/:find' +
      '/:findOne' +
      '/:comment';

    var params = {
      create: '@create',
      find: '@find',
      fineOne: '@findOne',
      comment: '@comment'
    };

    var actions = {
      create: {
        method: 'POST',
        params: {
          create: 'create'
        }
      },
      find: {
        method: 'GET',
        params: {
          find: 'find'
        }
      },
      findOne: {
        method: 'GET',
        params: {
          findOne: 'findOne'
        }
      },
      comment: {
        method: 'POST',
        params: {
          comment: 'comment'
        }
      },
    };

    var service = $resource(postUrl, params, actions);

    return service;
  }
})();
