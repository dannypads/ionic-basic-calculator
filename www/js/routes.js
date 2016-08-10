angular.module('starter.routes',[])
.config(function($stateProvider,$urlRouterProvider){

	$stateProvider
	.state('index',{

		url: '/home',
		templateUrl: 'templates/index.html',
		controller: 'indexController'
	})


	$urlRouterProvider.otherwise('/home')

})