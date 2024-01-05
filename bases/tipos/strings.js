"use strict";
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
