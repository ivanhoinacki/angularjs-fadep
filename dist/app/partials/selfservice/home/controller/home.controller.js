(function() {
    'use strict';

    angular
        .module('app.partials.selfservice')
        .controller('HomeController', ControllerHome);

    /* @ngInject */
    function ControllerHome($state) {
        var vm = this;
        (function init() {
            vm.onClickSelectLanguage = onClickSelectLanguage;
        })();

        function onClickSelectLanguage(){
            $state.go('group-products');
        }
    }
})();
