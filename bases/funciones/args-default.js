"use strict";
(function () {
    // los argumentos opcionales deben ir al final
    // cuando a los argumentos les ponemos un valor por defecto entonces pasa a ser un argumento opcional
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(firstName, " ").concat(lastName || 'no last name.').toUpperCase();
        }
        else {
            return "".concat(firstName, " ").concat(lastName || 'no last name.');
        }
    };
    var name = fullName('tony', 'stark');
    console.log(name);
})();
