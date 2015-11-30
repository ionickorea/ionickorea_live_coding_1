(function() {
  'use strict';
  angular.module('app')
    .controller('AddPostController', AddPostController);

  AddPostController.$inject = [
    'AddPostModel', '$q', '$state', 'Posts', '$ionicPopup'
  ];

  function AddPostController(
    AddPostModel, $q, $state, Posts, $ionicPopup
  ) {
    var AddPost = this;
    AddPost.Model = AddPostModel;

    AddPost.createPost = createPost;

    //====================================================
    //  Implementation
    //====================================================

    function createPost() {
      Posts.create({}, {
        title: AddPostModel.form.title,
        content: AddPostModel.form.content
      }).$promise
        .then(function(post) {
          var alertPromise = $ionicPopup.alert({
            title: '성공',
            template: '성공'
          });
          return $q.all([post, alertPromise]);
        })
        .then(function(array) {
          var post = array[0];
          var id = post.id;
          $state.go('postDetail', {
            id: id
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
