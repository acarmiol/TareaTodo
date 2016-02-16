angular.module("dataBase", [])
	.factory("BDService", function(){
		var dataService={};
		dataService.saved= localStorage.getItem("toDos"); //buscar toDos guardados en el local storage
		//settear el arreglo de toDos con los que ya estaban almacenados o como arreglo vacio
		if(localStorage.getItem("toDos")!=null){
			dataService.toDos=JSON.parse(dataService.saved);	
		}else{
			dataService.toDos=[];
		}
		/* toDos
			{actividad: "estudiar",
			descripción: "buscar videos y hacer la tarea",
			done: false}
		*/
		//agregar una actividad a la lista de actividades
		dataService.addToDo= function(newToDo, newDescrip){
			dataService.toDos.push({"actividad": newToDo,
			"descripcion": newDescrip, "done": false});	
			dataService.updateStorage();
		}//fin function

		dataService.updateStorage= function(){
			localStorage.setItem('toDos', JSON.stringify(dataService.toDos));
		}//fin function

		//remover las actividaes completadas-
		dataService.clearDone= function(){
			 dataService.toDos = dataService.toDos.filter(function(item){
			 	return !item.done;
			 	dataService.updateStorage();
			 	return dataService.getAll();
			})
		}//fin function

		//dejar en blanco la lista
		dataService.clearAll= function(){
			dataService.toDos=[];
			dataService.updateStorage();
			return dataService.getAll();
		}//fin function

		dataService.getAll= function(){
			return dataService.toDos;
		}

		return dataService;
	});

angular.module("toDoList", ["dataBase"])
	.controller("toDoCtrl", ["$scope", "BDService", function ($scope, BDService){	

		var geToDoList=  function () {
			return BDService.getAll();
		}



		$scope.addToDo= function () {
			BDService.addToDo($scope.newToDo, $scope.newDescrip);
			$scope.newToDo="";
			$scope.newDescrip="";
		}

		$scope.clearDone= function () {
			BDService.clearDone();
			$scope.init();
		};

		$scope.clearAll= function () {
			BDService.clearAll();
			$scope.init();
		}

		$scope.init= function () {
			$scope.toDos= geToDoList();
		}

		$scope.init();	
	}]);

