(() => {
  // Una función que no devuelve nada, es decir que no tenga un return,
  // es una función void, que no devuelve nada, el valos de a será undefined
  function callBatman(): void {
    return; // este return es lo mismo que hacer un 'return undefined'
    // esto nos puede servir para algún punto en donde queremos salir
    // de la función sin devolver nada
  }

  function superman(): void {
    return null; // null != undefined != void
  }

  const a = callBatman();
  console.log(a);
})();
