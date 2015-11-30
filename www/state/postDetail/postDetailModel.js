(function() {
  'use strict';

  angular.module('app')
    .factory('PostDetailModel', PostDetailModel);

  PostDetailModel.$inject = [];

  function PostDetailModel() {

    var model = {
      form: {
        content: ''
      },
      post: {

      }
    };

    return model;
  }
})();
