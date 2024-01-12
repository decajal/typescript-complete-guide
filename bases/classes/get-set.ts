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

    get fullName() {
      // un getter no recibe argumentos y siempre devuelve un valor
      return `${this.name} - ${this.realName}`;
    }

    set fullName(name: string) {
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
