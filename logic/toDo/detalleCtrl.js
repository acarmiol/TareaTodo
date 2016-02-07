angular.module('toDoList.controllers')
	.controller('DetalleCtrl', [
        '$scope',
        '$routeParams',
        'PersistenciaService',
        function ($scope, $routeParams, PersistenciaService) {
            var llave = $routeParams.id;

            $scope.init = function () {
                console.log($routeParams.id);
                $scope.lista = PersistenciaService.desalmacenar(llave) || [];
            };

            $scope.init();
        }])
;