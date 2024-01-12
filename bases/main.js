"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo Salvado !!';
        }
    }
    class Villian extends Mutante {
        conquistarMundo() {
            return 'Mundo Conquistado !!';
        }
    }
    // console log comentados solo para tener limpia la consola
    const wolveribe = new Xmen('Wolverine', 'Logan');
    // console.log(wolveribe.salvarMundo());
    const magneto = new Villian('Magneto', 'Magnus');
    // console.log(magneto.conquistarMundo());
    const printName = (character) => {
        // recibe un argumento que es mutante o extiende de él
        console.log(character.realName);
    };
    // printName(wolveribe); // Logan
    // printName(magneto); // Magnus
})();
(() => {
    //* Las clases tienen:
    //*   Propiedades y métodos:
    //*     - Privados: propiedad a la que sólo se accede des de dentro de la clase
    //*     - Públicos: por defecto son público, con lo cual, no es necesario especificar el tipo
    //*         si es que es de este tipo, pero es una buena práctica hacerlo
    //*     - Estáticos: se usa desde la clase, no desde la instancia del objeto
    //? Propiedades:
    //? ============
    //* Declaración válida tradicional:
    // class Avenger {
    //   private name: string;
    //   public team: string;  // si no pongo public es lo mismo que ponerlo, se coloca por buena práctica
    //   public realName?: string;
    //   static avgAge: number = 35;
    //   constructor(name: string, team: string, realName?: string) {
    //     this.name = name;
    //     this.team = team;
    //     this.realName = realName;
    //   }
    // }
    // const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    // console.log(antman);
    // console.log(Avenger.avgAge);
    //* Forma corta proporcionada por typescript
    // class Avenger {
    //   static avgAge: number = 35;
    //   constructor(private name: string, private team: string, public realName?: string) {}
    // }
    // const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
    // console.log(antman);
    // console.log(Avenger.avgAge);
    //? Métodos:
    //? ============
    class Avenger {
        static getTeam() {
            return 'S.H.I.E.L.D.';
        }
        static getClassRealName() {
            // devuelve el NOMBRE DE LA CLASE
            return this.name;
        }
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Capitan', 'Scott Lang');
    // console log comentados solo para tener limpia la consola
    // console.log(antman);
    // console.log(Avenger.avgAge);
    // console.log(antman.bio());
    // console.log(Avenger.getTeam());
    // console.log(Avenger.getClassRealName());
})();
(() => {
    // console log comentados solo para tener limpia la consola
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            // console.log('Constructor Avenger llamado !!');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            // console.log('Constructor Xmen llamado !!');
        }
        getFullNameFromXmen() {
            console.log(super.getFullName());
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    // console.log(wolverine);
    // wolverine.getFullNameFromXmen();
})();
//! Diferencia entre PRIVATE y PROTECTED
//?  PRIVATE: el acceso a la propiedad/método es SOLO desde DENTRO
//?           de la clase
//?  PROTECTED: el acceso a la propiedad/método es SOLO desde DENTRO
//?             de la clase o de sus clases HIJAS/HEREDADAS
//? Getters y Setters: que son ?
//? Básicamente son cómo propiedades comunes y corrientes
//?   pero internamente son como un métdodo
//?   se los llama, pero no se ejecutan => no se ponen los paréntesis al final
//* Algunas ventajas del uso de los getters y setters es que:
//*   - podemos controlar el acceso a las propiedades
//*   - podemos controlar el comportamiento de las propiedades
//*   - podemos hacer validaciones: de tipos, de valores por defecto, etc
(() => {
    // console log comentados solo para tener limpia la consola
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            // console.log('Constructor Avenger llamado !!');
        }
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            // console.log('Constructor Xmen llamado !!');
        }
        get fullName() {
            // un getter no recibe argumentos y siempre devuelve un valor
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            // un setter recibe 1 SOLO argumento y no devuelve nada
            //* VALIDACION
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor de 3 caracteres');
            }
            this.name = name;
        }
        getFullNameFromXmen() {
            console.log(super.getFullName());
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan', true);
    // console.log(wolverine);
    // wolverine.getFullNameFromXmen();
    // console.log(wolverine.fullName); // acceso al getter: sin paréntesis: NO SE EJECUTA, sólo se mandan a llamar
    // wolverine.fullName = 'Diego'; // acceso al setter
    // console.log(wolverine.fullName); // acceso al getter: sin paréntesis: NO SE EJECUTA, sólo se mandan a llamar
    // wolverine.fullName = 'As'; // acceso al setter
    // console.log(wolverine.fullName); // acceso al getter: sin paréntesis: NO SE EJECUTA, sólo se mandan a llamar
})();
(() => {
    //* Patrón Singleton:
    //* Si bien por buenas prácticas no se debería utilizar
    //*   puede ser necesario implementarlo, esta es la forma de hacerlo en typescript
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            // patron singleton
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy apocalipsis... el único');
            }
            return this.instance;
        }
        changeName(newName) {
            this.name = newName;
        }
    }
    // const apocalipsis1 = new Apocalipsis('Soy Apocalipsis... el único');
    // const apocalipsis2 = new Apocalipsis('Soy Apocalipsis... el único');
    // const apocalipsis3 = new Apocalipsis('Soy Apocalipsis... el único');
    // console.log(apocalipsis1, apocalipsis2, apocalipsis3);
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName('Xavier');
    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
//# sourceMappingURL=main.js.map