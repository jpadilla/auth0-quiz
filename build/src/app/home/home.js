angular.module('quiz.home', ['ui.router']).config([
  '$stateProvider',
  function config($stateProvider) {
    $stateProvider.state('home', {
      url: '/',
      controller: 'HomeCtrl',
      templateUrl: 'home/home.tpl.html',
      data: { pageTitle: 'Start the quiz' }
    });
  }
]).controller('HomeCtrl', [
  '$scope',
  function HomeController($scope) {
    $scope.test = 'Test variable';
  }
]);