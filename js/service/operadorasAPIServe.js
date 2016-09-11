angular.module("ListaTelefonica").service("operadorasAPI", operadorasAPIService);

/*@nhInject*/
function operadorasAPIService($http, config){
    this.getOperadoras = function(){
        return $http.get(config.baseUrl + '/operadoras');
    }
}
