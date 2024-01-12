(() => {
  //* Patrón Singleton:
  //* Si bien por buenas prácticas no se debería utilizar
  //*   puede ser necesario implementarlo, esta es la forma de hacerlo en typescript
  class Apocalipsis {
    static instance: Apocalipsis;

    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      // patron singleton
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis('Soy apocalipsis... el único');
      }
      return this.instance;
    }

    changeName(newName: string): void {
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
