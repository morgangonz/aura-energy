angular
    .module('yourAura.quiz')
    .controller('QuizCtrl', QuizCtrl);

function QuizCtrl(humans, $cordovaCamera, $state) {
    var vm = this;

    vm.beautifulHuman = {
		firstName: '',
		lastName: '',
		dob: ''
	}

	vm.continue = function() {
		var human = new humans.Human(
			vm.beautifulHuman.firstName,
			vm.beautifulHuman.lastName,
			vm.beautifulHuman.dob
		);

		humans.humans.push(human);

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
			   }
	}
}


