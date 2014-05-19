angular.module( 'quiz.quiz', [
  'ui.router',
  'quiz.helper',
  'quiz.quiz.question',
  'quiz.quiz.finish'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'quiz', {
    url: '/quiz',
    abstract: true,
    controller: 'QuizCtrl',
    templateUrl: 'quiz/quiz.tpl.html',
    data: { 
      pageTitle: 'Quiz',
      requiresLogin: true
    }
  });
})
.controller( 'QuizCtrl', function HomeController( $scope, QuizHelper, $state) {
  $scope.questions = QuizHelper.getQuestions(3);

});
