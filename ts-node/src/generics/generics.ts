// los genéricos
export const printObject = (argument: any) => {
  console.log(argument);
};

// El uso de la 'T' para decir que se trata de un tipo genérico es por convención, se podría
//   usar cualquier letra o incluso palabra, siempre que no sea una palabra reservada
//   T representa el tipo de dato que recibe
export function genericFunction<T>(argument: T): T {
  return argument;
}

export const genericFunctionArrow = <T>(argument: T): T => argument;

// sugerencias de las extensiones de IA

// genericos en clases
// export class GenericClass<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T;
// }

// genericos en interfaces
// export interface GenericInterface<T> {
//   zeroValue: T;
//   add: (x: T, y: T) => T;
// }
