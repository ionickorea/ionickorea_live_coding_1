(function() {
  'use strict';
  angular.module('app')
    .controller('PostListController', PostListController);

  PostListController.$inject = [
    'PostListModel', '$scope', '$ionicScrollDelegate',
    'Posts'
  ];

  function PostListController(
    PostListModel, $scope, $ionicScrollDelegate,
    Posts
  ) {
    var PostList = this;
    PostList.Model = PostListModel;

    PostList.loadMore = loadMore;
    PostList.refresh = refresh;

    $scope.$on('$ionicView.enter', onEnter);

    //====================================================
    //  Implementation
    //====================================================

    function onEnter() {
      return Posts.find({
          sort: 'id DESC',
          limit: 20
        }).$promise
        .then(function(postsWrapper) {
          var posts = postsWrapper.posts;
          var more = postsWrapper.more;
          PostListModel.posts = posts;
          PostListModel.more = more;
          $ionicScrollDelegate.resize();
        })
        .catch(function(err) {
          console.log("---------- err ----------");
          console.log(err);
          console.log("HAS TYPE: " + typeof err);
        });
    }

    function refresh() {
      return Posts.find({
          sort: 'id DESC',
          limit: 20
        }).$promise
        .then(function(postsWrapper) {
          var posts = postsWrapper.posts;
          var more = postsWrapper.more;
          PostListModel.posts = posts;
          PostListModel.more = more;
          $ionicScrollDelegate.resize();
        })
        .catch(function(err) {
          console.log("---------- err ----------");
          console.log(err);
          console.log("HAS TYPE: " + typeof err);
        })
        .finally(function() {
          $scope.$broadcast('scroll.refreshComplete');
        });
    }

    function loadMore() {
      var last = PostListModel.posts.length - 1;
      return Posts.find({
          olderThan: PostListModel.posts[last].id,
          sort: 'id DESC',
          limit: 20
        }).$promise
        .then(function(postsWrapper) {
          angular.forEach(postsWrapper.posts, function(post) {
            PostListModel.posts.push(post);
          });
          $scope.$broadcast('scroll.infiniteScrollComplete');
          PostListModel.more = postsWrapper.more;
        })
        .catch(function(err) {
          console.log("---------- err ----------");
          console.log(err);
          console.log("HAS TYPE: " + typeof err);
        });
    }

  }
})();
