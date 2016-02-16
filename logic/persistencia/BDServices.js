angular.module('BDServices')
	.factory("BDService", function(){
		var dataService={};

		dataService.saved= localStorage.getItem("toDos"); //buscar toDos guardados en el local storage
		//settear el arreglo de toDos con los que ya estaban almacenados o como arreglo vacio
		if(localStorage.getItem("toDos")!=null){
			dataService.toDos=JSON.parse(dataService.saved);	
		}else{
			dataService.toDos=[];
		}

		//agregar una actividad a la lista de actividades
		dataService.addToDo= function(objNuevaActividad){
			/* objNuevaActividad:
			{
				actividad: "estudiar",
				descripción: "buscar videos y hacer la tarea",
				fecha: 2/2/2016,
				estado: "pendiente",
				done: false,
			}
		*/
			dataService.toDos.push(objNuevaActividad);	
			dataService.updateStorage();
		}//fin function

		dataService.updateStorage= function(){
			localStorage.setItem('toDos', JSON.stringify(dataService.toDos));
		}//fin function

		//remover las actividaes completadas-
		dataService.deleteToDo= function(id){
			 dataService.toDos = dataService.toDos.filter(function (item){
			 	return item.id!=id;
			});
			 	dataService.updateStorage();
			 	return dataService.getAll();
		}//fin function

		dataService.updateDone= function(actividad){
			if(actividad.done){
				actividad.estado= "Completo";
				actividad.done= true;
			}else{
				actividad.estado= "Pendiente";
				actividad.done= false;
			}
			dataService.updateStorage();
			return dataService.getAll();
		};
		
		//dejar en blanco la lista
		dataService.clearAll= function(){
			dataService.toDos=[];
			dataService.updateStorage();
			return dataService.getAll();
		}//fin function

		dataService.getAll= function(){
			return dataService.toDos;
		};

		return dataService;
	});