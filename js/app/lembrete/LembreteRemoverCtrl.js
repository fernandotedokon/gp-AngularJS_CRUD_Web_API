var module = angular.module('lembrete');

module.controller('LembreteRemoverCtrl', ['$scope', '$http', '$routeParams', LembreteRemoverCtrl]);

function LembreteRemoverCtrl($scope, $http, $routeParams) {
    
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
    
    $scope.remover = function(){
        $scope.mensagem = 'Enviado os dados.';

        var promise = $http.delete('http://tedmedianotesapi.azurewebsites.net/api/notes/' + $scope.lembrete.Id);

        promise.then(
            // Em caso de sucesso
            function(){
                $scope.lembrete = {};
                $scope.mensagem = 'Seu lembrete foi apagado com sucesso.';
            }, 
            // Em caso de erro
            function(response){
                $scope.mensagem = '#Erro ' + response.status;
            }
        );
    }
}