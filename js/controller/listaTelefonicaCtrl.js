angular.module("ListaTelefonica").controller("listaTelefonicaCtrl", listaTelefonicaCtrl);

/*@ngInject*/
function listaTelefonicaCtrl($http, $scope, uppercaseFilter, contatoAPI, operadorasAPI, serialGenerator) {

    $scope.listaContatos = [];

    var carregaContatos = function() {
    contatoAPI.getContato().success(function(data) {

            data.forEach(function(item){
                item.serial = serialGenerator.generate();
            });
            $scope.listaContatos = data;
        })
        .error(function(data, status) {
            $scope.error = "Não foi possivel carrega os dados.";
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

    var carregaOperadoras = function() {
        operadorasAPI.getOperadoras().success(function(data) {
            $scope.listaOperadoras = data;
        }).error(function(data, status) {
            $scope.error = "Não foi possivel carrega os dados.";
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
            }
        );
    };

    $scope.ordernaPor = function(criterioOrdenacao) {
        $scope.txtCriterioOrdemacao = criterioOrdenacao;
        $scope.direcaoOrdenacao = !$scope.direcaoOrdenacao;
    };

    $scope.app = "Lista de Contatos";

    // $scope.vetClasses = ['classe1', 'classe2'];

    $scope.numero = 1000;

    carregaContatos();
    carregaOperadoras();
}
