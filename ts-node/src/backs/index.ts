// import { Hero } from './classes/Hero';
// import { Hero as HeroClasses } from './classes/Hero';
// import * as HeroClasses from './classes/Hero';
// import { powers } from './data/powers';
// import arrayOfPowers from './data/powers'; // en las importaciones por defecto puedo poner el nombre que yo quiera en el destino

import { printObject, genericFunction, genericFunctionArrow } from '../generics/generics';
import { Hero, Villain } from '../interfaces';

// const Hero = 123;
// console.log('Hola Mundo!!!!!');

// const ironman = new Hero('Ironman', 1, 55);
// const ironman = new HeroClasses('Ironman', 1, 55);
// const ironman = new HeroClasses.Hero('Ironman', 1, 55);
// console.log(ironman);
// console.log(arrayOfPowers);

// import { Hero } from './classes/Hero';

// const ironman = new Hero('Ironman', 1, 55);
// console.log(ironman);
// console.log(ironman.power);

// generics
// printObject(123);
// printObject(new Date());
// printObject({ a: 1, b: 2, c: 3 });
// printObject([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// printObject('Hola Mundo');
// const name: string = 'Fernando';

// console.log(genericFunction(3.1416).toFixed(2));
// console.log(genericFunction(name).toUpperCase());
// console.log(genericFunction(new Date()).getDate());

const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Wilson',
  dangerLevel: 130,
};

console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel);
