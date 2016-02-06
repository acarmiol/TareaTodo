angular.module("toDoList", ['ngRoute', 'dataBase', 'toDoList.controllers'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/indice', {
            templateUrl: 'html/indice.html',
            controller: 'toDoCtrl as toDo'
        })
        .when('/detalle/:id', {
            templateUrl: 'html/detalle.html',
            controller: 'DetalleCtrl'
        })
        .otherwise({redirectTo: '/indice'});
}])
;

angular.module('toDoList.controllers', []);
