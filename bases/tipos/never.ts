(() => {
  // never no es void ni undefined, never es never
  const error = (message: string): never => {
    throw new Error(message);
  };

  error('Auxilio!!!');
})();

// una función del tipo never es una función que por lo general va a terminar
// con un error
