angular
	.module('yourAura.improve')
	.config(improveConfig);

function improveConfig($stateProvider) {
	$stateProvider.state({
		name: 'improve',
		url: '/improve',
		templateUrl: 'js/features/improve/improve.html',
		controller: 'ImproveCtrl',
		controllerAs: 'ImproveVM'
	})
}