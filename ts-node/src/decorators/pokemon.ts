//? Los decoradores NO SON MÁS QUE SIMPLES FUNCIONES !!
//    Se los utiliza con la palabra "function" para que quede más claro que se trata de un
//     decorador, pero queda a discreción del programador
//! El decorador se ejecuta en el momento de la transpilación

// Notación de Factory Decorator:
//   El decorador es una función que retorna una función, por lo cual cuando usamos el decorador
//      se hace con los paréntesis al final, tenga o no argumentos y es como normalmente los
//      utilizaremos

function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
};

function CheckValidPokemonId() {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error('El id del pokemon debe estar entre 1 y 800');
      } else {
        return originalMethod(id);
      }
    };
    // descriptor.value = () => console.log('Hola mundo');
  };
}

// ? Un decorador de una propiedad es diferente que uno de una clase y de uno de un método
function ReadOnly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        // console.log(this);
        // return 'Fernando';
      },
      set(this, val) {
        // console.log(this, val);
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };

    return descriptor;
  };
}

const BloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

@BloquearPrototipo
@printToConsoleConditional(false)
export class Pokemon {
  @ReadOnly()
  public publicApi: string = 'https://pokeapi.co/';

  constructor(public name: string) {}

  @CheckValidPokemonId()
  savePokemonToDb(id: number) {
    console.log(`Pokemon guardado en DB ${id}`);
  }
}
