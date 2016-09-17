angular.module("ListaTelefonica").factory("Session", function($http, $rootScope, $cookieStore) {
    return {
        singIn: function(obj) {

            if((obj.user != 'usuario') || (obj.password !='123')){
                $cookieStore.remove('globals');
                return false;
            };

            $rootScope.globals = {
                user: obj.user,
                password: obj.password
            }

            $cookieStore.put('globals', $rootScope.globals);
            return true;
        }
    }
});
