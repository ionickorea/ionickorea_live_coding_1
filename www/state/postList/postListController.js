(function() {
  'use strict';
  angular.module('app')
    .controller('PostListController', PostListController);

  PostListController.$inject = [
    'PostListModel'
  ];

  function PostListController(
    PostListModel
  ) {
    var PostList = this;
    PostList.Model = PostListModel;


  }
})();
