angular.module('toDoList.controllers')
	.controller("detalleCtrl", ['$scope', 'BDService', '$routeParams', function ($scope, BDService, $routeParams) {
		var geToDoList=  function () {
			return BDService.getAll();
		};

		$scope.toDoList= BDService.getAll();
		$scope.route= $routeParams.id;

		$scope.clearToDo= function (id) {
			BDService.clearToDo(id);
			$scope.toDoList= BDService.getAll();
			$scope.init();
		};

		$scope.init= function () {
			$scope.toDos= geToDoList();
		}

		$scope.init();

		console.log($scope.toDoList);
		console.log($scope.route);

	}]);