(function() {
    'use strict';

    angular
        .module('app')
        .config(routeConfig);

    /* @ngInject */
    function routeConfig($stateProvider, $httpProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', '/home');

        $urlRouterProvider.otherwise('');
    }
})();
