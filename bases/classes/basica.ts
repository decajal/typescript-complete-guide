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
    static avgAge: number = 35;
    static getTeam(): string {
      return 'S.H.I.E.L.D.';
    }
    static getClassRealName(): string {
      // devuelve el NOMBRE DE LA CLASE
      return this.name;
    }

    constructor(private name: string, private team: string, public realName?: string) {}
    public bio() {
      return `${this.name} (${this.team})`;
    }
  }

  const antman: Avenger = new Avenger('Antman', 'Capitan', 'Scott Lang');
  // console log comentados solo para tener limpia la consola
  // console.log(antman);
  // console.log(Avenger.avgAge);

  // console.log(antman.bio());
  // console.log(Avenger.getTeam());
  // console.log(Avenger.getClassRealName());
})();
