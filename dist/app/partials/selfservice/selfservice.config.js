(function() {
    'use strict';

    angular
        .module('app.partials.selfservice')
        .config(moduleConfig);

    /* @ngInject */
    function moduleConfig($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/partials/selfservice/home/view/home.tmpl.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .state('group-products', {
                url: '/groupproducts',
                templateUrl: 'app/partials/selfservice/groupproduct/view/groupproduct.tmpl.html',
                controller: 'GroupProductController',
                controllerAs: 'vm'
            });
    }
})();
