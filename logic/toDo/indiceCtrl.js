angular.module('toDoList.controllers') 
.controller("indiceCtrl", ['$scope', 'BDService', function ($scope, BDService) {

	$scope.nuevaAct={};
	$scope.pendientes=0;

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
			$scope.nuevaAct.id=$scope.getId();
			$scope.nuevaAct.estado= "Pendiente";
			$scope.nuevaAct.done= false;
			BDService.addToDo($scope.nuevaAct);
			$scope.updateId();
			$scope.nuevaAct={};
		}

		$scope.updateId= function () {
			var newId= ($scope.getId())+1;
			localStorage.setItem("idSetter", newId);
		}

		$scope.clearAll= function () {
			BDService.clearAll();
			localStorage.setItem("idSetter", 1);
			$scope.init();
		};

		$scope.updateDone= function(actividad){
			BDService.updateDone(actividad);
		};

		$scope.init= function () {
			$scope.toDos= geToDoList();
		}

		$scope.cantToDos= function () {
			$scope.pendientes= BDService.getAll().filter(function (item) {
				return !item.done;
			});
			return $scope.pendientes.length;
		};

		$scope.init();
	
}]);



