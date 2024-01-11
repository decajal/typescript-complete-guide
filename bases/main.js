"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123432,
    };
    const { poder, vision } = avengers;
    console.log(poder.toFixed(2), vision.toUpperCase());
    // const printAvenger = (avengers: {
    //   nick: 'Samuel L. Jackson',
    //   ironman: 'Robert Downey Jr.',
    //   vision: 'Paul Bettany',
    //   activo: true,
    //   poder: 1500.123432,
    // }) => {
    //   console.log(avengers.vision);
    // };
    // lo podemos hacer con un 'type' y el código queda más limpio
    // además, podemos desustructurarlo directamente
    // y también puedo usar el operador spread para el resto de los
    // campos a desustructurar
    // esta desustructuración es posible a partir de ES6
    const printAvenger = (_a) => {
        var { vision } = _a, resto = __rest(_a, ["vision"]);
        console.log(vision, resto); // resto va a ser igual a todos los demás campos, MENOS vision
    };
    printAvenger(avengers);
    // Ahora, digamos que tenemos un arreglo de strings
    const avengersArr = ['Cap. América', 'Ironman', 'Hulk'];
    const ironman = avengersArr[1];
    console.log({ ironman });
    // cómo puedo desustructurarlo ?
    const [, ironman2] = avengersArr;
    // porque uso otro nombre? porque acá la desustructuración es
    //   por posisión y el nombre 'ironman' ya estaba tomado con anterioridad
    //   la ventaja de este tipo de desustructuración es que puedo usar otros nombres
    // en los objetos en cambio, va a buscar una propiedad con ese nombre
    console.log({ ironman2 });
    // ejemplo
    const [capi] = avengersArr;
    console.log({ capi });
    // ejemplo
    const [capitan, , hulk] = avengersArr;
    console.log({ capitan, hulk });
})();
(() => {
    const ironman = {
        name: 'Ironman',
        weapon: 'Armorsuit',
    };
    const captainAmerica = {
        name: 'Capitán América',
        weapon: 'Shield',
    };
    const thor = {
        name: 'Thor',
        weapon: 'Mjolnir',
    };
    const avengers = [ironman, thor, captainAmerica];
    // for-of
    for (const avenger of avengers) {
        console.log(avenger);
    }
    // forEach
    avengers.forEach((avenger) => console.log(avenger));
})();
(() => {
    const nombre = 'Fernando';
    const getName = () => {
        console.log('viejo getName');
    };
    getName();
})();
//# sourceMappingURL=main.js.map