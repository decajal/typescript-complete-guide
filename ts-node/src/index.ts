import { Pokemon } from './decorators/pokemon';

const charmander = new Pokemon('Charmander');
// (Pokemon.prototype as any).customName = 'Pikachu';
charmander.publicApi = 'https://google.com';
console.log(charmander);

// console.log(charmander.savePokemonToDb(50));
// charmander.savePokemonToDb(10);
