angular
    .module('yourAura.quiz')
    .config(quizConfig);

function quizConfig($stateProvider) {
    $stateProvider.state({
        name: 'quiz',
        url: '/quiz',
        templateUrl: 'js/features/quiz/quiz.html',
        controller: 'QuizCtrl',
        controllerAs: 'quizVM'
    })
}