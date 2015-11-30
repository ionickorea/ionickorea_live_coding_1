(function() {
  'use strict';
  angular.module('app')
    .config(route);

  function route($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.interceptors.push('AuthInterceptor');

    $stateProvider

    .state('login', {
      url: '/login',
      templateUrl: 'state/login/login.html',
      controller: 'LoginController as Login'
    })

    .state('postList', {
      url: '/postList',
      templateUrl: 'state/postList/postList.html',
      controller: 'PostListController as PostList'
    })

    .state('postDetail', {
      url: '/postDetail',
      templateUrl: 'state/postDetail/postDetail.html',
      controller: 'PostDetailController as PostDetail'
    })

    .state('addPost', {
      url: '/addPost',
      templateUrl: 'state/addPost/addPost.html',
      controller: 'AddPostController as AddPost'
    });

    $urlRouterProvider.otherwise('/login');

  }
})();
