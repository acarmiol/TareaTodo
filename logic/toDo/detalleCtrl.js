angular.module('toDoList.controllers')
	.controller("detalleCtrl", ['$scope', 'BDService', '$routeParams', function ($scope, BDService, $routeParams) {
		
		$scope.toDoList= BDService.getAll();
		$scope.route= $routeParams.id;

		console.log($scope.toDoList);
		console.log($scope.route);

	}]);