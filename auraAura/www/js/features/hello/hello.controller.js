angular
    .module('yourAura.hello')
    .controller('HelloCtrl', HelloCtrl);

function HelloCtrl($state, $stateParams) {
    var vm = this;
    

    vm.goToQuiz = function() {
    		$state.go('quiz');
	}
    

}