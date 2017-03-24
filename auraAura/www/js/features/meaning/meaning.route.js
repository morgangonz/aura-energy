angular
	.module('yourAura.meaning')
	.config(meaningConfig);

function meaningConfig($stateProvider) {
	$stateProvider.state({
		name: 'meaning',
		url: '/meaning',
		templateUrl: 'js/features/meaning/meaning.html',
		controller: 'MeaningCtrl',
		controllerAs: 'MeaningVM'
	})
}