(function() {
  'use strict';
  angular.module('app')
    .controller('PostDetailController', PostDetailController);

  PostDetailController.$inject = [
    'PostDetailModel'
  ];

  function PostDetailController(
    PostDetailModel
  ) {
    var PostDetail = this;
    PostDetail.Model = PostDetailModel;


  }
})();
