angular.module('templates-app', ['home/home.tpl.html', 'quiz/finish/finish.tpl.html', 'quiz/question/question.tpl.html', 'quiz/quiz.tpl.html']);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div>\n" +
    "  <h1>Auth0</h1>\n" +
    "  <p>Hi and welcome to the Auth0 quiz. Do you want to test how much you know about security, authentication and authorization of your app? Then just click on start and let's start with this.</p>\n" +
    "\n" +
    "  <button ui-sref=\"quiz.question({number: 0})\">Start</button>\n" +
    "</div>");
}]);

angular.module("quiz/finish/finish.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("quiz/finish/finish.tpl.html",
    "<div>\n" +
    "  <p>You've answered {{finishInfo.ok}} answers correctly of a total of {{finishInfo.total}}</p>\n" +
    "  <p>This are the questions we ask ourselves every day at Auth0.</p>\n" +
    "  <p>This are the questions you need to answer to create a very secure and easy to use Authentication and Authorization provider.</p>\n" +
    "  <p>This are the questions you don't need to worry about if you use Auth0. You only have to worry about the core of your business</p>\n" +
    "</div>");
}]);

angular.module("quiz/question/question.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("quiz/question/question.tpl.html",
    "<div>\n" +
    "  <h2>{{question.question}}</h2>\n" +
    "  <div ng-repeat=\"answer in question.answers\">\n" +
    "  	<input type=\"radio\" ng-model=\"question.response\" ng-value=\"$index\" />{{answer}}\n" +
    "  </div>\n" +
    "  <button ng-disabled=\"empty(question)\" ng-click=\"finish()\" ng-show=\"questions.length - 1 == number\">Finish</button>\n" +
    "  <button ng-disabled=\"empty(question)\" ng-click=\"next()\" ng-hide=\"questions.length - 1 == number\">Next</button>\n" +
    "</div>");
}]);

angular.module("quiz/quiz.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("quiz/quiz.tpl.html",
    "<div>\n" +
    "  <h1>Quiz</h1>\n" +
    "\n" +
    "  <div ui-view ></div>\n" +
    "</div>");
}]);
