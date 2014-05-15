angular.module('quiz.quiz', [
  'ui.router',
  'quiz.helper',
  'quiz.quiz.question',
  'quiz.quiz.finish'
]).config([
  '$stateProvider',
  function config($stateProvider) {
    $stateProvider.state('quiz', {
      url: '/quiz',
      abstract: true,
      controller: 'QuizCtrl',
      templateUrl: 'quiz/quiz.tpl.html',
      data: { pageTitle: 'Quiz' }
    });
  }
]).controller('QuizCtrl', [
  '$scope',
  'QuizHelper',
  '$state',
  function HomeController($scope, QuizHelper, $state) {
    $scope.questions = QuizHelper.getQuestions(4);
  }
]);