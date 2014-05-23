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
				"My site doesn't have CSRF issues. It only does GETs",
				"I use token-based authentication which has CSRF protection built-in or a nounce"
			],
			correct: 2
		}, {
			question: 'Which of these websites is vulnerable to the Covert Redirect attack?',
			answers: [
				"Google. They should have searched what to do",
				"Facebook",
				"http://www.nyancat.com/",
				"...mmmm...covert what?"
			],
			correct: 1
		}, {
			question: 'Why is bcrypt better to hash passwords?',
			answers: [
				"Uses multiple iterations to hash passwords",
				"Uses hashes, salt and lasers"
			],
			correct: 0
		}, {
			question: 'What is a JSON Web Token?',
			answers: [
				"A digitally signed JSON object",
				"A token invented by Jason Bourne",
				"An encrypted XML document"
			],
			correct: 0
		}, {
			question: 'How would you implement Multifactor Auth?',
			answers: [
				"Using the X-Factor",
				"With Google Authenticator",
				"Asking your users for 2 passwords"
			],
			correct: 1
		}];
	});
