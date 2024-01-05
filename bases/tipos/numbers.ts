(() => {
  let avengers: number = 10;
  console.log(avengers);
  const villians: number = 20;
  if (avengers < villians) {
    console.log('Estamos en problemas');
  } else {
    console.log('Nos salvamos');
  }
  avengers = Number('123A'); //? OJO: NaN es considerado un número (en JavaScript)
  console.log({ avengers });
})();
