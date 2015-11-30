(function() {
  'use strict';

  angular.module('app')
    .factory('AddPostModel', AddPostModel);

  AddPostModel.$inject = [];

  function AddPostModel() {

    var model = {
      form: {
        title: '',
        content: ''
      }
    };

    return model;
  }
})();
