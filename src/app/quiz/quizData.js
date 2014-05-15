angular.module('quiz.data', [])
	.factory('QuizData', function() {
		return [{
			question: 'Which algorithm would you use to hash passwords?',
			answers: [
				"sha1",
				"bcrypt",
				"quicksort"
			],
			correct: 1
		}, {
			question: 'How would you prevent CSRF attacks?',
			answers: [
				"I use cookies, so I'm not vulnerable to CSRF",
				"My site does not have CSRF issues because it only does GETs",
				"I create a random value each time a POST is made",
				"I use token-based authentication which has CSRF protection built-in"
			],
			correct: 3
		}, {
			question: 'Which of these websites is vulnerable to the Covert Redirect attack?',
			answers: [
				"Google. They should have searched what to do",
				"Facebook",
				"http://www.nyancat.com/",
				"All of the above"
			],
			correct: 1
		}, {
			question: 'bcrypt uses an algorithm that...',
			answers: [
				"Uses multihashes",
				"Uses hashes with a per user salt",
				"Uses a hash that takes a long time to compute",
				"Uses hashes, salt and pepper"
			],
			correct: 2
		}, {
			question: 'A Json web token is an...',
			answers: [
				"Opaque token",
				"Stateless Token",
				"None of the above"
			],
			correct: 1
		}, {
			question: 'When would you use Google Authenticator as a 2nd. factor auth mechanism?',
			answers: [
				"When my users have a Google account",
				"When my users have an Android device",
				"When my users have a Smartphone",
				"None of the above"
			],
			correct: 2
		}];
	});