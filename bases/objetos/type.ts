(() => {
  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  };

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
  console.log(superman);
})();
