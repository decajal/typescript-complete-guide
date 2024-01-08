"use strict";
(function () {
    // estos argumentos son obligatorios
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    };
    // let noName: string;
    // const name = fullName(noName, 'stark');
    var name = fullName('tony', 'stark');
    console.log(name);
})();
