angular
	.module('yourAura.measure')
	.config(measureConfig);

function measureConfig($stateProvider) {
	$stateProvider.state({
		name: 'measure',
		url: '/measure',
		templateUrl: 'js/features/measure/measure.html',
		controller: 'MeasureCtrl',
		controllerAs: 'MeasureVM'
	})
}