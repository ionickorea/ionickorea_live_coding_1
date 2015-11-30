(function() {
  'use strict';
  angular.module('app')
    .controller('PostDetailController', PostDetailController);

  PostDetailController.$inject = [
    'PostDetailModel', '$scope', 'Posts',
    '$state', '$ionicScrollDelegate', '$ionicPopup'
  ];

  function PostDetailController(
    PostDetailModel, $scope, Posts, $state, $ionicScrollDelegate, $ionicPopup
  ) {
    var PostDetail = this;
    PostDetail.Model = PostDetailModel;

    PostDetail.createComment = createComment;

    $scope.$on('$ionicView.enter', onEnter);
    //====================================================
    //  Implementation
    //====================================================
    function onEnter() {
      return Posts.findOne({
          id: $state.params.id
        }).$promise
        .then(function(post) {
          console.log("---------- post ----------");
          console.log(post);
          console.log("HAS TYPE: " + typeof post);

          PostDetailModel.post = post;
          $ionicScrollDelegate.resize();
        })
        .catch(function(err) {
          console.log("---------- err ----------");
          console.log(err);
          console.log("HAS TYPE: " + typeof err);
        });
    }

    function createComment() {
      return Posts.comment({}, {
          post: $state.params.id,
          content: PostDetailModel.form.content
        }).$promise
        .then(function() {
          $state.reload();
          $ionicPopup.show({
            title: '성공',
            template: '성공'
          });
        })
        .catch(function(err) {
          console.log("---------- err ----------");
          console.log(err);
          console.log("HAS TYPE: " + typeof err);
        });
    }

  }
})();
