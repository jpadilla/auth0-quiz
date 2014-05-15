angular.module('quiz.data', []).factory('QuizData', function () {
  return [
    {
      question: 'Which algorithim would you use to hash passwords?',
      answers: [
        'sha1',
        'bcrypt',
        'quicksort'
      ],
      correct: 1
    },
    {
      question: 'How do you prevent CSRF attacks?',
      answers: [
        'I use cookies, so I\'m not vulnerable to CSRF',
        'My site does not have CSRF issues because it has only GET',
        'I create a random value each time a POST is made',
        'I use token-based authentication which has CSRF protection built in'
      ],
      correct: 3
    },
    {
      question: 'Which of this websites is sensible to the Covert Redirect vulnerability?',
      answers: [
        'Google. They should have searched what to do',
        'Facebook',
        'http://www.nyancat.com/',
        'All of the above'
      ],
      correct: 1
    },
    {
      question: 'bcrypt has an algorithm that...',
      answers: [
        'Uses multihashes',
        'Uses hashes with a per user salt',
        'Uses a hash that takes a long time to compute',
        'Uses hashes, salt and pepper'
      ],
      correct: 2
    },
    {
      question: 'A JSon web token is a...',
      answers: [
        'Opaque token',
        'Stateless Token',
        'None of the above'
      ],
      correct: 1
    },
    {
      question: 'When you will use Google Authenticator as a 2nd factor Auth mechanism?',
      answers: [
        'When all my users have a Google account',
        'When all my users have an Android',
        'When all my users have a Smartphone',
        'None of the above'
      ],
      correct: 2
    },
    {
      question: 'When you will use Google Authenticator as a 2nd factor Auth mechanism?',
      answers: [
        'When all my users have a Google account',
        'When all my users have an Android',
        'When all my users have a Smartphone',
        'None of the above'
      ],
      correct: 2
    }
  ];
});