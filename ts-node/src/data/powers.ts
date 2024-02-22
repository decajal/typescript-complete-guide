interface Power {
  id: number;
  desc: string;
}

//? Esto es una exportación tradicional o una importación independiente
// export const powers: Power[] = [
//   {
//     id: 1,
//     desc: 'Money',
//   },
//   {
//     id: 2,
//     desc: 'Drugs',
//   },
// ];

const powers: Power[] = [
  {
    id: 1,
    desc: 'Money',
  },
  {
    id: 2,
    desc: 'Drugs',
  },
];

export default powers; //? Esto es una exportación por defecto
