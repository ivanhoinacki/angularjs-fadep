angular.module("serialGenerator", []);
angular.module("serialGenerator").provider("serialGenerator", serialGeneratorProvider);

/*@ngInject*/
function serialGeneratorProvider() {

    var _length = 10;

    this.getLength = function() {
        return _length;
    };

    this.setLength = function(length) {
        _length = length;
    };

    this.$get = function() {
        return {
            generate: function() {
                var serial = "";

                while (serial.length < _length) {
                    serial += String.fromCharCode(Math.floor(Math.random() * 55) + 50);
                }

                return serial;
            }
        }
    };

}
