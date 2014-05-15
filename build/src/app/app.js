angular.module('quiz', [
  'templates-app',
  'templates-common',
  'quiz.home',
  'quiz.quiz',
  'ui.router'
]).config([
  '$stateProvider',
  '$urlRouterProvider',
  function myAppConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }
]).run(function run() {
}).controller('AppCtrl', [
  '$scope',
  '$location',
  function AppCtrl($scope, $location) {
    $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
      if (angular.isDefined(toState.data.pageTitle)) {
        $scope.pageTitle = toState.data.pageTitle + ' | Auth0 Quiz';
      }
    });
  }
]);
;