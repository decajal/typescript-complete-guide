"use strict";
(function () {
    var avenger = 123;
    var exists;
    var power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0)); // este es un casteo que me permite decir: "esto es un any pero trátalo como un string"
    avenger = 150.23256415;
    console.log(avenger.toFixed(2)); // es otra forma de hacer el mismo casteo, queda a discreción del programador
})();
