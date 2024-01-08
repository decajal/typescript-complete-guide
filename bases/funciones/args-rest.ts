(() => {
  // tengo un argumento obligatorio y después tengo EL RESTO DE LOS argumentos
  const fullName = (firstName: string, ...restArgs: string[]): string => {
    return `${firstName} ${restArgs.join(' ')}`;
  };

  const superman = fullName('clark', 'joseph', 'kent');
  console.log(superman);
})();
