(() => {
  //! RECORDAR:
  //   - En Javascript no existen los tipos estrictos, todo es dinámico
  class Avenger {
    name; // esta declaración es opcional
    power; // esta declaración es opcional

    constructor(name = 'No name', power = 0) {
      // yq que con estas declaracioones es suficiente
      this.name = name;
      this.power = power;

      this.otraPropiedad = true; // fijarse que esta propiedad no está declarada arriba y lo mismo funciona
      // este problema nos puede llevar a tener muchos errores DIFICILES DE ATRAPAR
    }
  }

  class FlyingAvenger extends Avenger {
    flying; // esta declaración es opcional
    constructor(name, power) {
      super(name, power);
      this.flying = true;
    }
  }

  const hulk = new Avenger('Hulk', 9001);
  console.log(hulk);
  const falcon = new FlyingAvenger('Falcon', 50);
  console.log(falcon);
})();
