"use strict";
(function () {
    // tengo un argumento obligatorio y después tengo EL RESTO DE LOS argumentos
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restArgs.join(' '));
    };
    var superman = fullName('clark', 'joseph', 'kent');
    console.log(superman);
})();
