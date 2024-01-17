(() => {
  // En cuanto a las recomendaciones, se suele colocar la interface principal arriba
  //   y luego abajo van las interfaces secundarias
  // Las interfaces NO CREAN INSTANCIAS
  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string): string; // las interfaces no implementan la lógica, sólo establecen el contrato
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: 'diego',
    age: 47,
    address: {
      id: 125,
      zip: 'KY2 SUD',
      city: 'Ottawa',
    },
    getFullAddress(id: string) {
      return this.address.city;
    },
  };

  const client2: Client = {
    name: 'melisa',
    age: 30,
    address: {
      city: 'Toronto',
      id: 120,
      zip: 'K2S U2A',
    },
    getFullAddress(id: string) {
      return this.address.city;
    },
  };
})();
