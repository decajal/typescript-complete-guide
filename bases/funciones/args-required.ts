(() => {
  // estos argumentos son obligatorios
  const fullName = (firstName: string, lastName: string): string => {
    return `${firstName} ${lastName}`;
  };

  // let noName: string;
  // const name = fullName(noName, 'stark');
  const name = fullName('tony', 'stark');
  console.log(name);
})();
