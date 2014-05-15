angular.module( 'quiz.quiz.finish', [
  'ui.router',
  'quiz.helper'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'quiz.finish', {
    url: '/finish',
    controller: 'FinishCtrl',
    templateUrl: 'quiz/finish/finish.tpl.html',
    data: { pageTitle: 'Quiz' }
  });
})
.controller( 'FinishCtrl', function HomeController( $scope, QuizHelper ) {
  $scope.finishInfo = QuizHelper.getFinishInfo($scope.questions);
});
