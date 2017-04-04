angular
    .module('yourAura.quiz')
    .controller('QuizCtrl', QuizCtrl);
    

function QuizCtrl($cordovaCamera, $state, $ionicPopup) {
    var vm = this;

// //blue button working with popup
	function showColor (color) {
		console.log(color);
		switch(color){
			case "red": 
				
        		break; 
        	case "yellow/orange":
        		
        		break;
        	case "blue/green":
        		
        		break;
        	case "purple":
        		
        		break;									
		}
		var showPopup = $ionicPopup.show({
     		title: 'Your aura is ' + color,
     		//template: 'You are ' + template,
            subTitle: 'Click next to continue to take photo ',
            buttons: [
                {text: 'Okay'},
                {text: 'Next',
                type: 'button-dark',
                    onTap: function() {
                     //camera function
                     console.log('clicked next')
                    }
                }
            ]
    });

            // showPopup.then(function() {
            //   console.log('Tapped!');
            // });
  
  }

//function for colors (findColor is called in html on submit, showColor is called in this fn from above)
	vm.colors = {}

	vm.colors.one;
	vm.colors.two;
	vm.colors.three;
	vm.colors.four;
	
	vm.findColor = function() {
		
		var res = [];
		for (i in vm.colors) {
    		if (!res.includes(vm.colors[i])) res.push(vm.colors[i]);
		}
		showColor(res[Math.floor(Math.random() * res.length)])
	}

//closing tag for QuizCtrl
}


//                 function cameraFn() {
// //calls from components folder of humans (?)    
// // var human = new human.Beautiful(
// // //     vm.patientInfo.firstName,
// // //     vm.patientInfo.lastName,
// // //     vm.patientInfo.dob
// // //);

// // human.Beautiful.push(human);

//     if (window.Camera) {    
//         var options = {
//           quality: 50,
//           destinationType: Camera.DestinationType.DATA_URL,
//           sourceType: Camera.PictureSourceType.CAMERA,
//           allowEdit: true,
//           encodingType: Camera.EncodingType.JPEG,
//           targetWidth: 100,
//           targetHeight: 100,
//           popoverOptions: CameraPopoverOptions,
//           saveToPhotoAlbum: false,
//           correctOrientation:true
//         };

//         $cordovaCamera.getPicture(options).then(function(imageData) {
//           var image = document.getElementById('myImage');
//           image.src = "data:image/jpeg;base64," + imageData;
//         } else {
//         //go to new state (at very least this state can be hardcoded aura image)
//         $state.go('improve');
//        }
//   }
      
//   } 


