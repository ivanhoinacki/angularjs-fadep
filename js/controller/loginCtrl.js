angular.module("ListaTelefonica").controller("LoginCtrl", function($location, Session) {
    var vm = this;

    (function init() {
        vm.form = {};
        addEvents();
    })();

    function addEvents() {
        vm.singIn = singIn;
    }

    function singIn(form) {
        if(Session.singIn(form)) {
            $location.path("/contatos");
        }else{
            vm.error = "usuario invalido";
        }
    }

});
