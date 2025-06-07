const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
      ciudad: 'New York',
      zip: 1126445
    }
};

// console.table( persona );

const persona2 = { ...persona }; 
persona2.nombre = 'Peter';

console.table(persona);
console.table(persona2)
