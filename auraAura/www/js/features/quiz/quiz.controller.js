angular
    .module('yourAura.quiz')
    .controller('QuizCtrl', QuizCtrl);
    

function QuizCtrl($cordovaCamera, $state, $ionicPopup) {
    var vm = this;

// //blue button working with popup
	function showColor (color) {
		console.log(color);
		var template;
		switch(color){
			case "red": 
				template = `competitive, energizing, exciting,
        					passionate, impulsive, powerful,
        					intense, agressive, strong`;
        		break; 
        	case "orange":
        		template = `orange juice wins at codewars`;
        		break;
        	case "yellow":
        		template = `sunshine`;
        		break;
        	case "green":
        		template = `envious`;
        		break;
        	case "blue":
        		template = `jkdskl`;
        		break;
        	case "purple":
        		template = `jekwiql,`;
        		break									
		}
		var alertPopup = $ionicPopup.alert({
     		title: 'Your aura is ' + color,
     		template: 'You are ' + template
   		});

		 // alertPopup.then(function(res) {
   //   		console.log('Thank you for working');
   	};  



// 	}
// ////green button upload
// vm.capturePhoto =function(){
//     navigator.camera.getPicture(uploadPhoto,null,{sourceType:1,quality:60});
// }
// function uploadPhoto(data){
// // this is where you would send the image file to server
 
// //output image to screen
//     document.getElementById('cameraPic').src = data;
// }




//vince's function for colors

	vm.colors = {}

	vm.colors.one;
	vm.colors.two;
	vm.colors.three;
	vm.colors.four;
	vm.colors.five;
	vm.colors.six;
	vm.colors.seven;

	vm.findColor = function() {
		
		var res = [];
		for (i in vm.colors) {
    		if (!res.includes(vm.colors[i])) res.push(vm.colors[i]);
		}
		showColor(res[Math.floor(Math.random() * res.length)])
	}


}





