"use strict";
(function () {
    var a = 10;
    var b = 10;
})();
(function () {
    // Funciones Básicas
    function sumar(a, b) {
        return a + b;
    }
    var contar = function (heroes) {
        return heroes.length;
    };
    var superHeroes = ['Flash', 'Arrow', 'Superman', 'Linterna Verde'];
    contar(superHeroes);
    //Parametros por defecto
    var llamarBatman = function (llamar) {
        if (llamar === void 0) { llamar = false; }
        if (llamar) {
            console.log('Batiseñal activada');
        }
    };
    llamarBatman();
    // Rest?
    var unirheroes = function () {
        var personas = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            personas[_i] = arguments[_i];
        }
        return personas.join(', ');
    };
    // Tipo funcion
    var noHaceNada = function (numero, texto, booleano, arreglo) { };
    // Crear el tipo de funcion que acepte la funcion "noHaceNada"
    var noHaceNadaTampoco;
    noHaceNadaTampoco = noHaceNada;
})();
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
(function () {
    // en typescript, el ternario define a ese argumento como opcional
    // en Javascript TODOS los argumentos son OPCIONALES
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || 'no last name.');
    };
    var name = fullName('tony');
    console.log(name);
})();
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
(function () {
    // las firmas de las funciones en typescript
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hola ".concat(name); };
    var saveTheWorld = function () { return "El mundo esta salvado"; };
    var myFunction;
    // myFunction = 10;
    // console.log(myFunction);
    // let myFunction: (y: number, z: number) => number;
    // myFunction = addNumbers;
    // console.log(myFunction(1, 2));
    // let myFunction: (y: string) => string;
    // myFunction = greet;
    // console.log(myFunction('Fernando'));
    // let myFunction: () => string;
    // myFunction = saveTheWorld;
    // console.log(myFunction());
})();
(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
})();
(function () {
    // Objetos
    var batimovil = {
        carroceria: 'Negra',
        modelo: '6x6',
        antibalas: true,
        pasajeros: 4,
    };
    var bumblebee = {
        carroceria: 'Amarillo con negro',
        modelo: '4x2',
        antibalas: true,
        pasajeros: 4,
        disparar: function () {
            // El metodo disparar es opcional
            console.log('Disparando');
        },
    };
    var villanos = [
        {
            nombre: 'Lex Luthor',
            edad: 54,
            mutante: false,
        },
        {
            nombre: 'Erik Magnus Lehnsherr',
            edad: 49,
            mutante: true,
        },
        {
            nombre: 'James Logan',
            edad: undefined,
            mutante: true,
        },
    ];
    var charles = {
        poder: 'psiquico',
        estatura: 1.78,
    };
    var apocalipsis = {
        lider: true,
        miembros: ['Magneto', 'Tormenta', 'Psylocke', 'Angel'],
    };
    // Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
    var mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['super velocidad', 'viajar en el tiempo'],
    };
    console.log(flash);
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad', 'Super fuerza'],
        getName: function () {
            return this.name;
        },
    };
    console.log(superman);
    console.log(superman.getName());
})();
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['super velocidad', 'viajar en el tiempo'],
    };
    console.log(flash);
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['Super velocidad', 'Super fuerza'],
        getName: function () {
            return this.name;
        },
    };
    console.log(superman);
})();
(function () {
    var myCustomVariable = 'Fernando';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [1],
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
(function () {
    var avenger = 123;
    var exists;
    var power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0)); // este es un casteo que me permite decir: "esto es un any pero trátalo como un string"
    avenger = 150.23256415;
    console.log(avenger.toFixed(2)); // es otra forma de hacer el mismo casteo, queda a discreción del programador
})();
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    var fuerzaFlash = 5 /* Fuerza.Flash */;
    var fuerzaSuperman = 100 /* Fuerza.Superman */;
    var fuerzaBatman = 1 /* Fuerza.Batman */;
    var fuerzaAcuaman = 0 /* Fuerza.Acuaman */;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
(function () {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(numbers);
    var villians = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villians.forEach(function (v) { return console.log(v.toUpperCase()); });
    numbers.forEach(function (v) { return console.log(v); });
})();
(function () {
    var isSuperman = true;
    var isBatman = false;
    isSuperman = isBatman ? true : false;
    console.log({ isSuperman: isSuperman });
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.max;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(function () {
    // never no es void ni undefined, never es never
    var error = function (message) {
        throw new Error(message);
    };
    error('Auxilio!!!');
})();
// una función del tipo never es una función que por lo general va a terminar
// con un error
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
(function () {
    var avengers = 10;
    console.log(avengers);
    var villians = 20;
    if (avengers < villians) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Nos salvamos');
    }
    avengers = Number('123A'); //? OJO: NaN es considerado un número (en JavaScript)
    console.log({ avengers: avengers });
})();
(function () {
    var _a;
    var batman = 'Batman';
    var linternaVerde = 'Linterna Verde';
    var volcanNegro = "H\u00E9roe: Volcan Negro";
    var abc = 123;
    console.log("I'm ".concat(batman, ", ").concat(abc)); // automáticamente hace el abc.toString()
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está presente');
})();
(function () {
    var hero = ['Dr. Strange', 100, true];
    hero[0] = 'Ironman';
    hero[1] = 50;
    hero[2] = false;
    console.log(hero);
})();
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
//# sourceMappingURL=main.js.map