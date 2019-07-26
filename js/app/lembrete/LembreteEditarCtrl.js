var module = angular.module('lembrete');

module.controller('LembreteEditarCtrl', ['$scope', '$http', '$routeParams', LembreteEditarCtrl]);

function LembreteEditarCtrl($scope, $http, $routeParams){

    var id = $routeParams.id;

    var promise = $http.get('http://tedmedianotesapi.azurewebsites.net/api/notes/' + id);

    promise.then(
        function(response){        
            $scope.lembrete = response.data;
        }
    );
    
    $scope.salvar = function(){
        $scope.mensagem = "Enviando os dados.";

        var promise = $http.put(
            'http://tedmedianotesapi.azurewebsites.net/api/notes/' + $scope.lembrete.Id, 
            $scope.lembrete
        );

        promise.then(
            // Em caso de sucesso
            function(){
                $scope.mensagem = "Seu lembrete foi salvo com sucesso.";
            }, 
            // Em caso de erro
            function(response){
                $scope.mensagem = '#Erro ' + response.status;
            }
        );
    };
}