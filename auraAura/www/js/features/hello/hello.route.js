angular
	.module('yourAura.hello')
	.config(helloConfig);

function helloConfig($stateProvider) {
	$stateProvider.state({
		name: 'hello',
		url: '/hello',
		templateUrl: 'js/features/hello/hello.html',
		controller: 'HelloCtrl',
		controllerAs: 'HelloVM'
	})
}