(() => {
  // los argumentos opcionales deben ir al final
  // cuando a los argumentos les ponemos un valor por defecto entonces pasa a ser un argumento opcional
  const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
    if (upper) {
      return `${firstName} ${lastName || 'no last name.'}`.toUpperCase();
    } else {
      return `${firstName} ${lastName || 'no last name.'}`;
    }
  };

  const name = fullName('tony', 'stark');
  console.log(name);
})();
