angular.module('toDoList.controllers')
	.controller("detalleCtrl", [$routeProvider, "BDService", function(){
        var detalles = '';
        
        detalles= dataService.getAll();
        
    }])