angular.module('templates-app', ['home/home.tpl.html', 'quiz/finish/finish.tpl.html', 'quiz/question/question.tpl.html', 'quiz/quiz.tpl.html']);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div>\n" +
    "  <h1 id=\"logo\"><img src=\"assets/auth0_logo_final_blue_RGB.png\" /></h1>\n" +
    "  <div class=\"home-description\">\n" +
    "  	\n" +
    "	  <p class=\"\">Hi and welcome to the Auth0 quiz. Do you want to test how much you know about security, authentication and authorization of your app?</p>\n" +
    "	  <p>Then just click on start and let's start with this.</p>\n" +
    "\n" +
    "  </div>\n" +
    "\n" +
    "  <button class=\"btn btn-lg btn-primary\" ui-sref=\"quiz.question({number: 0})\">Start</button>\n" +
    "</div>");
}]);

angular.module("quiz/finish/finish.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("quiz/finish/finish.tpl.html",
    "<div>\n" +
    "  <div class=\"jumbotron\">\n" +
    "    <h1>{{finishInfo.ok}}/{{finishInfo.total}}</h1>\n" +
    "    <p>{{congratsText[finishInfo.ok]}}</p>\n" +
    "\n" +
    "    <div class=\"input-group\">\n" +
    "      <span class=\"input-group-addon\">@</span>\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"Enter your twitter screen name\" ng-model=\"handle\">\n" +
    "    </div>\n" +
    "    <p><a ng-click=\"tweet()\" ng-disabled=\"!handle\" class=\"btn btn-primary btn-twitter btn-lg\" role=\"button\">{{tweetText}}</a></p>\n" +
    "  </div>\n" +
    "</div>");
}]);

angular.module("quiz/question/question.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("quiz/question/question.tpl.html",
    "<div>\n" +
    "  <h2>{{question.question}}</h2>\n" +
    "  <div class=\"answer\" ng-repeat=\"answer in question.answers\">\n" +
    "	<input type=\"radio\" id=\"option_{{$index}}\" ng-model=\"question.response\" ng-value=\"$index\" />\n" +
    "	<label for=\"option_{{$index}}\">\n" +
    "		{{answer}}\n" +
    "  	</label>\n" +
    "  </div>\n" +
    "  <button ng-disabled=\"empty(question)\" ng-click=\"finish()\" class=\"btn btn-next btn-lg\" ng-show=\"questions.length - 1 == number\">Finish</button>\n" +
    "  <button ng-disabled=\"empty(question)\" ng-click=\"next()\" class=\"btn btn-next btn-lg\" ng-hide=\"questions.length - 1 == number\">Next</button>\n" +
    "</div>");
}]);

angular.module("quiz/quiz.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("quiz/quiz.tpl.html",
    "<div>\n" +
    "  <h1 id=\"logo\"><img src=\"assets/auth0_logo_final_blue_RGB.png\" /></h1>\n" +
    "\n" +
    "  <div ui-view ></div>\n" +
    "</div>");
}]);
