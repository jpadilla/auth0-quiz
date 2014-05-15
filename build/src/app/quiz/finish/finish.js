angular.module('quiz.quiz.finish', [
  'ui.router',
  'quiz.helper'
]).config([
  '$stateProvider',
  function config($stateProvider) {
    $stateProvider.state('quiz.finish', {
      url: '/finish',
      controller: 'FinishCtrl',
      templateUrl: 'quiz/finish/finish.tpl.html',
      data: { pageTitle: 'Quiz' }
    });
  }
]).controller('FinishCtrl', [
  '$scope',
  'QuizHelper',
  function HomeController($scope, QuizHelper) {
    $scope.finishInfo = QuizHelper.getFinishInfo($scope.questions);
  }
]);