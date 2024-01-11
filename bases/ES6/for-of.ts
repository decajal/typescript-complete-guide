(() => {
  type Avenger = {
    name: string;
    weapon: string;
  };

  const ironman: Avenger = {
    name: 'Ironman',
    weapon: 'Armorsuit',
  };

  const captainAmerica: Avenger = {
    name: 'Capitán América',
    weapon: 'Shield',
  };

  const thor: Avenger = {
    name: 'Thor',
    weapon: 'Mjolnir',
  };

  const avengers = [ironman, thor, captainAmerica];
  // for-of
  for (const avenger of avengers) {
    console.log(avenger);
  }
  // forEach
  avengers.forEach((avenger) => console.log(avenger));
})();
