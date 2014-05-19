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
.controller( 'FinishCtrl', function HomeController( $scope, QuizHelper, $http ) {
  $scope.finishInfo = QuizHelper.getFinishInfo($scope.questions);
  $scope.congratsText = [
    "Use Auth0 you definetly need, youung padawan. Anyway, FREE Bitcoins you get :).",
    "You're starting to get it, youung padawan. Anyway, FREE Bitcoins you get :)",
    "Well done, young padawan. FREE Bitcoins you get :).",
    "You've mastered the challenge, youung padawan. FREE Bitcoins you get :)"
  ];

  $scope.start = function() {
    $state.go('home');
  }

  $scope.tweetText = "Tell the world you're awesome";

  $scope.tweet = function() {
    $scope.tweetText = 'Telling the world...';
    $scope.tweeting = true;
    $http({
        method: 'POST',
        url: 'http://auth0-codecademy.herokuapp.com/api/finished',
        data: {
            handle: $scope.handle,
            type: 'quiz'
        }
    }).then(function(data) {
        $scope.tweetText = "The world now knows how awesome you are";
    }, function(err) {
        $scope.tweetText = "The world now knows how awesome you are";
    });
  }

});
