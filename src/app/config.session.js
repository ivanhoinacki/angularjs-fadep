(function () {
    'use strict';

    angular
    .module('app')
    .factory('GPlusAuthService', GPlusAuthService)
    .factory('GPSession', GPSession);

    /* @ngInject */
    function GPlusAuthService($q, $window, GPSession){
        return {
            signIn: function(callbacklogin) {
                var defered = $q.defer();

                gapi.auth.signIn({
                    clientid: "530675244790-at0tgb6s5osqpqnfchvgs1017bq1s606.apps.googleusercontent.com",
                    cookiepolicy: "single_host_origin",
                    requestvisibleactions: "http://schemas.google.com/AddActivity",
                    scope: "https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email",
                    callback : callbacklogin
                });

                return defered.promise;
            }
        };
    }

    function GPSession($http, $filter, $cookieStore, $rootScope, $timeout) {
        var service              = {};
        service.SetCredentials   = SetCredentials;
        service.ClearCredentials = ClearCredentials;

        return service;

        function SetCredentials(data) {        
            if(angular.equals(data.status.google_logged_in, false)){
                console.log(data);
                return;
            }

            $rootScope.globals = {
                currentUser: {
                    username  : data.id_token,
                    authdata  : data.access_token,
                    data      : data
                }
            };

            $cookieStore.put('globals', $rootScope.globals);
            return;
        }

        function ClearCredentials() {
            $rootScope.globals = {};
            $cookieStore.remove('globals');
        }
    }

})();
