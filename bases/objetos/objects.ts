(() => {
  let flash: {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: 'Barry Allen',
    age: 24,
    powers: ['super velocidad', 'viajar en el tiempo'],
  };
  console.log(flash);

  let superman: {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: 'Clark Kent',
    age: 60,
    powers: ['Super velocidad', 'Super fuerza'],
    getName() {
      return this.name;
    },
  };
  console.log(superman);
  console.log(superman.getName());
})();
