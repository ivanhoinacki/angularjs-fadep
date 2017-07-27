(function() {
    'use strict';
    angular
    .module('app', [
        'ngCookies', 'ngResource', 'ngMessages', 'ngAnimate', 'toastr', 'ui.router', 'app.partials'
    ])
    .constant('SESSION', {
        timer : 0
    });
})();
