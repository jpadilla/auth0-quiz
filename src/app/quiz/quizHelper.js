angular.module('quiz.helper', ['quiz.data'])
	.service('QuizHelper', function(QuizData) {
		this.getQuestions = function(n) {
			if (n > QuizData.length) {
				throw new Error("You can't select more questions than available");
			}
			var numbersGot = [];
			var questions = [];
			while(questions.length < n) {
				var questionNumber = randomNumber();
				if (_.contains(numbersGot, questionNumber)) {
					continue;
				}
				numbersGot.push(questionNumber);
				questions.push(angular.copy(QuizData[questionNumber]));
			}
			return questions;
		}

		this.getFinishInfo = function(questions) {
			var results = _.map(questions, function(q) {
				return q.response == q.correct;
			});

			var stats = _.countBy(results);

			return {
				ok: stats.true,
				total: questions.length,
			}
		}

		var randomNumber = function() {
			return Math.floor((Math.random() * (QuizData.length - 1)) + 0);
		}
	});