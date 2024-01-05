"use strict";
(function () {
    var nada = undefined;
    console.log(nada);
    var isActive = undefined;
    // Si cambiamos el valor por defecto de la propiedad: (en el tsconfig)
    //? "strictNullChecks": true
    // de true a false,
    //   + undefined va a ser permitido como valor de la variable 'isActive'
    //   + null va a ser permitido como valor de la variable 'isActive'
    // y OJO: null !== undefined
    console.log(isActive);
})();
