angular
	.module('yourAura.learnMore')
	.config(learnMoreConfig);

function learnMoreConfig($stateProvider) {
	$stateProvider.state({
		name: 'learnMore',
		url: '/learnMore',
		templateUrl: 'js/features/learnMore/learnMore.html',
		controller: 'LearnMoreCtrl',
		controllerAs: 'LearnMoreVM'
	})
}