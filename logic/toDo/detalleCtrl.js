angular.module('toDoList.controllers')
	.controller("detalleCtrl", ['$scope', 'BDService', '$routeParams', function ($scope, BDService, $routeParams) {
		
		$scope.toDoList= BDService.getAll();
		$scope.route= $routeParams.id;

		$scope.clearToDo= function (id) {
			BDService.clearToDo(id);
			BDService.getAll();
		};

		console.log($scope.toDoList);
		console.log($scope.route);

	}]);