angular
	.module('yourAura.signup')
	.config(signupConfig);

function signupConfig($stateProvider) {
	$stateProvider.state({
		name: 'signup',
		url: '/signup',
		templateUrl: 'js/features/signup/signup.html',
		controller: 'SignupCtrl',
		controllerAs: 'SignupVM'
	})
}