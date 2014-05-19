angular.module( 'quiz.login', [
  'ui.router',
  'auth0', 
  'authInterceptor'
])
.config(function config( $stateProvider, authProvider, $httpProvider ) {
  $stateProvider.state( 'login', {
    url: '/login',
    controller: 'LoginCtrl',
    templateUrl: 'login/login.tpl.html',
    data: { pageTitle: 'Login' }
  });

  authProvider.init({
    domain: 'codecademy.auth0.com',
    clientID: 'yUiinEhNCEa7jztDjn2d87KHIFUFYNHL',
    callbackURL: location.href
  });

  $httpProvider.interceptors.push('authInterceptor');
})
.run(function($rootScope, auth, $state) {
  $rootScope.$on('$stateChangeStart', function(e, to) {
    if (to.data && to.data.requiresLogin) {
      if (!auth.isAuthenticated) {
        e.preventDefault();
        $state.go('login');
      }
    }
  });
})
.controller( 'LoginCtrl', function HomeController( $scope, auth, $state ) {

  $scope.login = function() {
        auth.signin({
          popup: true,
          connections: ['twitter']
        }).then(function() {
            $state.go('home');
        }, function() {
            console.log("There was an error signin in");
        });
    }
  
});
