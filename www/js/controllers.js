angular.module('starter.controllers',[])
.controller('indexController',function($scope,$ionicPopup){

	$scope.add = function(numbers){

		$scope.result = numbers.one + numbers.two;
	}

	$scope.subtract = function(numbers){
		$scope.result = numbers.one - numbers.two;
	}

	$scope.multiply = function(numbers){
		$scope.result = numbers.one * numbers.two;
	}	

	$scope.divide = function(numbers){

		if(numbers.two == 0){
			$ionicPopup.alert({
			     title: 'Error!',
			     template: 'No existe la división para 0!'
			});

		}else{
			$scope.result = numbers.one / numbers.two;
		}
	}		
})