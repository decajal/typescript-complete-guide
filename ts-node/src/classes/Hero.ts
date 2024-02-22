import powers from '../data/powers';

export class Hero {
  constructor(public name: string, public powerId: number, public age: number) {}

  get power(): string {
    return powers.find((power) => power.id === this.powerId)?.desc || 'Not found';
    // return powers.find((power) => power.id === this.powerId)!.desc || 'Not found';
    //? El signo '!' quiere decir algio así: hey ts, confía en mía, yo se lo que estoy haciendo,
    //?   este código no va a ser 'undefained'
  }
}

export class Hero2 {}
export class Hero3 {}

export const PI = 3.1416;
export const MI_NOMBRE = 'Diego Cajal';
