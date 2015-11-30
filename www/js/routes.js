angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('로그인', {
      url: '/login',
      templateUrl: 'templates/로그인.html',
      controller: '로그인Ctrl'
    })
        
      
    
      
        
    .state('글목록', {
      url: '/postList',
      templateUrl: 'templates/글목록.html',
      controller: '글목록Ctrl'
    })
        
      
    
      
        
    .state('아이오닉크리에이터', {
      url: '/postDetail',
      templateUrl: 'templates/아이오닉크리에이터.html',
      controller: '아이오닉크리에이터Ctrl'
    })
        
      
    
      
        
    .state('새글쓰기', {
      url: '/addPost',
      templateUrl: 'templates/새글쓰기.html',
      controller: '새글쓰기Ctrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

});