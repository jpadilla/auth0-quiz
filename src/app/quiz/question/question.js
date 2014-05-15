angular.module( 'quiz.quiz.question', [
  'ui.router',
  'quiz.helper'
])
.config(function config( $stateProvider ) {
  $stateProvider.state( 'quiz.question', {
    url: '/question/:number',
    controller: 'QuestionCtrl',
    templateUrl: 'quiz/question/question.tpl.html',
    data: { pageTitle: 'Quiz' }
  });
})
.controller( 'QuestionCtrl', function HomeController( $scope, $stateParams, $state ) {
  $scope.number = parseInt($stateParams.number, 10);
  $scope.question = $scope.questions[$scope.number];

  $scope.next = function() {
  	$state.go('quiz.question', {number: $scope.number + 1});
  }

  $scope.finish = function() {
  	$state.go('quiz.finish');
  }

  $scope.empty = function(question) {
  	return _.isUndefined(question.response) || _.isNull(question.response);
  }
});
