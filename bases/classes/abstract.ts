(() => {
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
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

  const printName = (character: Mutante) => {
    // recibe un argumento que es mutante o extiende de él
    console.log(character.realName);
  };

  // printName(wolveribe); // Logan
  // printName(magneto); // Magnus
})();
