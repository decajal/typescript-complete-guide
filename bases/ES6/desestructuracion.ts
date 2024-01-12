(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers: Avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500.123432,
  };

  const { poder, vision } = avengers;
  console.log(poder.toFixed(2), vision.toUpperCase());

  // const printAvenger = (avengers: {
  //   nick: 'Samuel L. Jackson',
  //   ironman: 'Robert Downey Jr.',
  //   vision: 'Paul Bettany',
  //   activo: true,
  //   poder: 1500.123432,
  // }) => {
  //   console.log(avengers.vision);
  // };

  // lo podemos hacer con un 'type' y el código queda más limpio
  // además, podemos desustructurarlo directamente
  // y también puedo usar el operador spread para el resto de los
  // campos a desustructurar
  // esta desustructuración es posible a partir de ES6

  const printAvenger = ({ vision, ...resto }: Avengers) => {
    console.log(vision, resto); // resto va a ser igual a todos los demás campos, MENOS vision
  };

  printAvenger(avengers);

  // Ahora, digamos que tenemos un arreglo de strings
  const avengersArr: string[] = ['Cap. América', 'Ironman', 'Hulk'];
  const ironman = avengersArr[1];
  console.log({ ironman });
  // cómo puedo desustructurarlo ?
  const [, ironman2] = avengersArr;
  // porque uso otro nombre? porque acá la desustructuración es
  //   por posisión y el nombre 'ironman' ya estaba tomado con anterioridad
  //   la ventaja de este tipo de desustructuración es que puedo usar otros nombres
  // en los objetos en cambio, va a buscar una propiedad con ese nombre
  console.log({ ironman2 });
  // ejemplo
  const [capi] = avengersArr;
  console.log({ capi });
  // ejemplo
  const [capitan, , hulk] = avengersArr;
  console.log({ capitan, hulk });
})();
