(() => {
  // Las interfaces no tienen una representación en Javascript, Javascript no tiene tipado estricto
  //   es una característica que nos proporciona typescript para objetos
  //   es prácticamente lo mismo que los types
  //   la única diferencia es que los tipos no sin extendibles mientras que las interfaces si
  //   el tipo no puede expandirse, se queda así
  interface Hero {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  }

  let flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: ['super velocidad', 'viajar en el tiempo'],
  };
  console.log(flash);

  let superman: Hero = {
    name: 'Clark Kent',
    age: 60,
    powers: ['Super velocidad', 'Super fuerza'],
    getName() {
      return this.name;
    },
  };
})();
