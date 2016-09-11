angular.module("ListaTelefonica").factory("contatoAPI", contatoAPIFactory);

/*@ngInject*/
function contatoAPIFactory($http, config) {

    var _getContatos = function() {
        return $http.get(config.baseUrl + '/contatos');
    };

    var _saveContato = function(contato) {
        return $http.post(config.baseUrl + '/contatos', contato);
    };

    return {
        getContato : _getContatos,
        saveContato: _saveContato
    }
};
