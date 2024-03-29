// Crear interfaces

interface Car {
  encender: boolean;
  velocidadMaxima: number;
  acelear(): void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = (auto: Car): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
};

const batimovil: Car = {
  encender: false,
  velocidadMaxima: 0,
  acelear() {
    console.log('...... gogogo!!!');
  },
};

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface Guason {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: Guason = {
  reir: true,
  comer: true,
  llorar: false,
};

const reir = (guason: Guason): void => {
  if (guason.reir) {
    console.log('JAJAJAJA');
  }
};

// Cree una interfaz para la siguiente funcion
interface CiudadGoticaFn {
  (ciudadanos: string[]): number;
}

const ciudadGotica: CiudadGoticaFn = (ciudadanos: string[]): number => {
  return ciudadanos.length;
};

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface IPersona {
  edad: number;
  estadoCivil: string;
  nopmbre: string;
  sexo: string;
  imprimirBio(): void;
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements IPersona {
  public edad: number;
  public estadoCivil: string;
  public nopmbre: string;
  public sexo: string;

  imprimirBio() {}
}
