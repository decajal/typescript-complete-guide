"use strict";
(function () {
    // Una función que no devuelve nada, es decir que no tenga un return,
    // es una función void, que no devuelve nada, el valos de a será undefined
    function callBatman() {
        return; // este return es lo mismo que hacer un 'return undefined'
        // esto nos puede servir para algún punto en donde queremos salir
        // de la función sin devolver nada
    }
    function superman() {
        return null; // null != undefined != void
    }
    var a = callBatman();
    console.log(a);
})();
