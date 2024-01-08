"use strict";
(function () {
    // en typescript, el ternario define a ese argumento como opcional
    // en Javascript TODOS los argumentos son OPCIONALES
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || 'no last name.');
    };
    var name = fullName('tony');
    console.log(name);
})();
