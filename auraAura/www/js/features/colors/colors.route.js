angular
	.module('yourAura.colors')
	.config(colorsConfig);

function colorsConfig($stateProvider) {
	$stateProvider.state({
		name: 'colors',
		url: '/colors',
		templateUrl: 'js/features/colors/colors.html',
		controller: 'ColorsCtrl',
		controllerAs: 'ColorsVM'
	})
}