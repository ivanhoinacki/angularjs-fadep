(function() {
    'use strict';

    angular
        .module('app.partials.selfservice')
        .controller('GroupProductController', ControllerGroupProudct);

    /* @ngInject */
    function ControllerGroupProudct($state) {

        var vm = this;
        (function init() {
            vm.onClickVoltar = onClickVoltar;
        })();

        function onClickVoltar(){
            $state.go('home');
        }

    }
})();
