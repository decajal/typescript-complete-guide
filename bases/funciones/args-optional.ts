(() => {
  // en typescript, el ternario define a ese argumento como opcional
  // en Javascript TODOS los argumentos son OPCIONALES
  const fullName = (firstName: string, lastName?: string): string => {
    return `${firstName} ${lastName || 'no last name.'}`;
  };

  const name = fullName('tony');
  console.log(name);
})();
