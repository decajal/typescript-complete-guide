(() => {
  let nada: undefined = undefined;
  console.log(nada);

  let isActive: boolean = undefined;
  // Si cambiamos el valor por defecto de la propiedad: (en el tsconfig)
  //? "strictNullChecks": true
  // de true a false,
  //   + undefined va a ser permitido como valor de la variable 'isActive'
  //   + null va a ser permitido como valor de la variable 'isActive'
  // y OJO: null !== undefined

  console.log(isActive);
})();
