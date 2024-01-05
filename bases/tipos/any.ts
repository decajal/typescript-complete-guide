(() => {
  let avenger: any = 123;
  let exists;
  let power;

  avenger = 'Dr Strange';
  console.log((avenger as string).charAt(0)); // este es un casteo que me permite decir: "esto es un any pero trátalo como un string"
  avenger = 150.23256415;
  console.log(<number>avenger.toFixed(2)); // es otra forma de hacer el mismo casteo, queda a discreción del programador
})();
