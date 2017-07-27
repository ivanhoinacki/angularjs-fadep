(function () {
    'use strict';

    angular
    .module('app')
    .factory('Utils', Utils)
    .filter('formatTimer', formatTimer);

    /* @ngInject */
    function Utils($q, $window){
        return {
            combinacao: function(list, number) {
                var matrix = [], i, k;
                for (i = 0, k = -1; i < list.length; i++) {
                    if (i % number === 0) {
                        k++;
                        matrix[k] = [];
                    }
                    matrix[k].push(list[i]);
                }
                return matrix;
            },
            processavalores: function(arr){
                var obj = {};
                for (var i = 0; i < arr.length; i++) {
                    obj[arr[i]] = true;
                }
                arr = [];
                for (var key in obj) {
                    if(!angular.equals(key, '')){
                        arr.push(key);
                    }
                }
                return arr;
            }
        };
    }

    function formatTimer(){
        return function(input)
        {
            function z(n) {return (n<10? '0' : '') + n;}
            var seconds = input % 60;
            var minutes = Math.floor(input / 60);
            var hours = Math.floor(minutes / 60);
            return (z(hours) +':'+z(minutes)+':'+z(seconds));
        };
    }


})();
