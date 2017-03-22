angular
    .module('yourAura.quiz')
    .controller('QuizCtrl', QuizCtrl);

function QuizCtrl($cordovaCamera, $state) {
    var vm = this;

   

	vm.continue = function() {
		
			if (window.Camera) {	
				var options = {
			      quality: 50,
			      destinationType: Camera.DestinationType.DATA_URL,
			      sourceType: Camera.PictureSourceType.CAMERA,
			      allowEdit: true,
			      encodingType: Camera.EncodingType.JPEG,
			      targetWidth: 100,
			      targetHeight: 100,
			      popoverOptions: CameraPopoverOptions,
			      saveToPhotoAlbum: false,
				  correctOrientation:true
			    };

			    $cordovaCamera.getPicture(options).then(function(imageData) {
			      var image = document.getElementById('myImage');
			      image.src = "data:image/jpeg;base64," + imageData;
			    }, function(err) {
			      // error
			    });
			} else {
				//overrides without having a camera since on computer
				//else upload
				console.log("I see you"); 
			   }
	}
}


