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
                type: 'button-positive',
                    // onTap: function(e) {
                    //     if (!$scope.data.image){
                    //     //take user to upload page or directyly to camera
                    //     e.preventDefalt();
                    //     } else {
                    //     return $scope.data.image
                    //     }   
                    // }
                }
            ]
   		});

		 // showPopup.then(function(res) {
   //    		console.log('Thank you for working',res);
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
	

	vm.findColor = function() {
		
		var res = [];
		for (i in vm.colors) {
    		if (!res.includes(vm.colors[i])) res.push(vm.colors[i]);
		}
		showColor(res[Math.floor(Math.random() * res.length)])
	}


}





