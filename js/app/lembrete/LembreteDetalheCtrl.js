var module = angular.module('lembrete');

module.controller('LembreteDetalheCtrl',['$scope', '$http', '$routeParams', LembreteDetalheCtrl]);

function LembreteDetalheCtrl($scope, $http, $routeParams) {
   
    var id = $routeParams.id;

    var promise = $http.get('http://tedmedianotesapi.azurewebsites.net/api/notes/' + id);

    promise.then(
        // Em caso de sucesso
        function(response){
            $scope.lembrete = response.data;
        }, 
        // Em caso de erro
        function(response){
            $scope.mensagem = '#Erro ' + response.status;
        }
    );
}