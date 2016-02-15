angular.module('toDoList.controllers')
	.controller("detalleCtrl", ['$scope', 'BDService', '$routeParams', function ($scope, BDService, $routeParams) {

		$scope.toDoList= BDService.getAll();
		$scope.route= Number($routeParams.id);

		$scope.todo= (function () {
			$scope.todo= BDService.getAll().filter(function (item) {
				return item.id== $scope.route;
			})
			return $scope.todo[0];
		})();


		$scope.clearToDo= function () {
			BDService.clearToDo($scope.route);
			$scope.toDoList= BDService.getAll();
		};

	}]);