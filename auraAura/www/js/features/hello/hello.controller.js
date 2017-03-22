angular
    .module('yourAura.hello')
    .controller('HelloCtrl', HelloCtrl);

function HelloCtrl($state) {
    var vm = this;

    vm.continue = function () {
        
            $state.go('quiz');

        }
    }
