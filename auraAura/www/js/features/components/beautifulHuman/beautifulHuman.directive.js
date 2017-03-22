angular
    .module('yourAura.component.beautifulHuman')
    .directive('beautifulHuman', beautifulHumanDirective);

function beautifulHumanDirective() {
    // return back an object
    return {
        restrict: 'E',
        scope: {
            patientData: "="
        },
        templateUrl: 'js/features/components/beautifulHuman/beautifulHuman.html',
        controller: BeautifulHumanCtrl,
        controllerAs: 'BeautifulHumanVM',
        bindToController: true
    }
}

function beautifulHumanCtrl () {
 var vm = this;
 vm.hello = "world";

 console.log("beautifulHumanCtrl");

 vm.doThings = function () {
     console.log('THING');
 }
}