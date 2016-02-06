angular.module('toDoList.controllers') 
.controller("indiceCtrl", ['$scope', 'BDService', function ($scope, BDService) {

	var geToDoList=  function () {
			return BDService.getAll();
		}

		$scope.getId= function () {
			var id;
			if(localStorage.getItem("idSetter")!=null && localStorage.getItem("idSetter")!="NAN"){
				id= Number(localStorage.getItem("idSetter"));
			}else{
				id=1;
			}
			return id;
		}
		
		$scope.addToDo= function () {
			BDService.addToDo($scope.getId(), $scope.newToDo, $scope.newDescrip);
			$scope.newToDo="";
			$scope.newDescrip="";
			$scope.updateId();
		}

		$scope.updateId= function () {
			var newId= ($scope.getId())+1;
			localStorage.setItem("idSetter", newId);
		}

		$scope.clearDone= function () {
			BDService.clearDone();
			$scope.init();

		};

		$scope.clearAll= function () {
			BDService.clearAll();
			localStorage.setItem("idSetter", 1);
			$scope.init();
		}

		$scope.init= function () {
			$scope.toDos= geToDoList();
		}

		$scope.init();
	
}]);



