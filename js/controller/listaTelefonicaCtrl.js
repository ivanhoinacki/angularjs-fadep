angular.module("ListaTelefonica").controller("ListaTelefonicaCtrl", listaTelefonicaCtrl);

/*@ngInject*/
function listaTelefonicaCtrl(contatos, operadoras, contatosAPI, $scope, serialGenerator) {

    $scope.listaContatos = [];

    // carregados pelo resolve do routeConfig

    $scope.listaContatos = contatos.data;
    $scope.listaOperadoras = operadoras.data;


    // var carregaContatos = function() {
    //
    //     contatosAPI.getContatos().success(function(data) {
    //             data.forEach(function(item) {
    //                 item.serial = serialGenerator.generate();
    //             });
    //             $scope.listaContatos = data;
    //         })
    //         .error(function(data, status) {
    //             $scope.error = "Não foi possivel carrega os dados.";
    //         });
    // };
    //
    // var carregaOperadoras = function() {
    //     operadorasAPI.getOperadoras().success(function(data) {
    //         $scope.listaOperadoras = data;
    //     }).error(function(data, status) {
    //         $scope.error = "Não foi possivel carrega os dados.";
    //     });
    // };

    var generateSerial = function(contatos) {
        contatos.forEach(function(item) {
            item.serial = serialGenerator.generate();
        });
    };

    $scope.adicionarContato = function(contato) {

        contato.serial = serialGenerator.generate();
        contato.dataNascimento = new Date();
        contato.cor = "red";
        contatoAPI.saveContato(contato).success(function(data) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregaContatos();
        });

    };

    $scope.isSelecionado = function(contatos) {
        return contatos.some(function(contato) {
            return contato.selecionado;
        })
    };

    $scope.apagarContatos = function(contatos) {
        $scope.listaContatos = contatos.filter(function(contato) {
            if (!contato.selecionado)
                return contato;
        });
    };

    $scope.ordernaPor = function(criterioOrdenacao) {
        $scope.txtCriterioOrdemacao = criterioOrdenacao;
        $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
    };

    $scope.app = "Lista de Contatos";

    // $scope.vetClasses = ['classe1', 'classe2'];

    $scope.numero = 1000;

    generateSerial($scope.listaContatos);

    // carregaContatos();
    // carregaOperadoras();
}
