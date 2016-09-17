angular.module("ListaTelefonica").config(function($routeProvider) {

    $routeProvider
        .when("/contatos", {
            templateUrl: "view/contato/contato.html",
            controller: "ListaTelefonicaCtrl",
            controllerAs: 'vm',
            resolve: {
                contatos: function(contatosAPI, $location) {
                    return contatosAPI.getContatos()
                        .success(function(data) {
                            return data;
                        })
                        .error(function(data, status) {
                            $location.path("/login");
                        });

                },
                operadoras: function(operadorasAPI) {
                    return operadorasAPI.getOperadoras();
                }
            }
        })
        .when("/login", {
            templateUrl: "view/login/login.html",
            controller: "LoginCtrl",
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: "/login"
        });
});

angular.module("ListaTelefonica").run(function run($rootScope, $cookieStore, $location) {
    $rootScope.globals = $cookieStore.get('globals') || {};
    $rootScope.$on("$locationChangeStart", function(event, next, current) {
        var logado = $rootScope.globals.user;
        if (!logado) {
            $location.path("/login");
        }
    });

});
