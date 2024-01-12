(() => {
  // console log comentados solo para tener limpia la consola
  class Avenger {
    constructor(public name: string, public realName: string) {
      // console.log('Constructor Avenger llamado !!');
    }

    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, private isMutant: boolean) {
      super(name, realName);
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
