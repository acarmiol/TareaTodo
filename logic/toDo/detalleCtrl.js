angular.module('toDoList.controllers')
	.controller('DetalleCtrl', [
        '$scope',
        '$routeParams',
        'PersistenciaService',
        function ($scope, $routeParams, BDService) {
            var llave = $routeParams.id;

            $scope.init = function () {
                console.log($routeParams.id);
                $scope.lista = BDService.desalmacenar(llave) || [];
            };

            $scope.init();
        }]); 