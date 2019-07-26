var module = angular.module('lembrete', ['ngRoute']);

module.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            controller: 'LembreteListarCtrl',
            templateUrl: 'template/listar.html'
        })
        .when('/criar', {
            controller: 'LembreteCriarCtrl',
            templateUrl: 'template/criar.html'
        })
        .when('/detalhes/:id', {
            controller: 'LembreteDetalheCtrl',
            templateUrl: 'template/detalhes.html'
        })
        .when('/editar/:id', {
            controller: 'LembreteEditarCtrl',
            templateUrl: 'template/editar.html'
        })
        .when('/remover/:id', {
            controller: 'LembreteRemoverCtrl',
            templateUrl: 'template/remover.html'
        });
}]);