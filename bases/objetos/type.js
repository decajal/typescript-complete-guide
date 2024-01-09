"use strict";
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
