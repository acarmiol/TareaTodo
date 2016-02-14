angular.module("toDoList", ['ngRoute', 'dataBase', 'toDoList.controllers'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/indice', {
            templateUrl: 'html/indice.html',
            controller: 'indiceCtrl'
        })
        .when('/detalle/:id', {
            templateUrl: 'html/detalle.html',
            controller: 'detalleCtrl'
        })
        .otherwise({redirectTo: '/indice'});
}])
;

angular.module('toDoList.controllers', []);


