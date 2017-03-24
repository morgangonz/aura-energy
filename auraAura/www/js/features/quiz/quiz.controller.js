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
        					intense, aggressive, strong`;
        		break; 
        	case "orange":
        		template = `joyful, ambitious, fun,
        					happy, energetic, balanced,
        					vibrant, warm, enthusiastic`;
        		break;
        	case "yellow":
        		template = `cheerful, idealist, hopeful,
        					imaginative, philosophical, youthful,
        					optimistic, generous`;
        		break;
        	case "green":
        		template = `lively, envious, spiritual,
        					stable, successful, grateful`;
        		break;
        	case "blue":
        		template = `protective, unique, peaceful,
         					quiet, understanding, trustworthy,
         					harmonious, loyal, calm`;
        		break;
        	case "purple":
        		template = `nostalgic, delicate, mysterious, 
        					transformative, independent,
        					respectful, wealthy, enlightening`;
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




//function for colors

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





