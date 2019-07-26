var module = angular.module('lembrete');

module.controller('LembreteCriarCtrl', ['$scope', '$http', LembreteCriarCtrl]);

function LembreteCriarCtrl($scope, $http){
    
    $scope.salvar = function(){

        $scope.mensagem = "Enviando os dados.";

        var promise = $http.post('http://tedmedianotesapi.azurewebsites.net/api/notes/', 
            $scope.lembrete
        );

        promise.then(
            // Em caso de sucesso
            function(){
                $scope.mensagem = "Seu lembrete foi salvo com sucesso";
            }, 
            // Em caso de erro
            function(response){
                $scope.mensagem = '#Erro ' + response.status;
            }
        );
    };
}