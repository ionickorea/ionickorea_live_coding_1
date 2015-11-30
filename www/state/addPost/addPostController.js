(function() {
  'use strict';
  angular.module('app')
    .controller('AddPostController', AddPostController);

  AddPostController.$inject = ['AddPostModel'];

  function AddPostController(AddPostModel) {
    var AddPost = this;
    AddPost.Model = AddPostModel;

    //====================================================
    //  Implementation
    //====================================================
  }
})();
