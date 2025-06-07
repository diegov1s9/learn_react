// Variables y Constantes
const nameUser = "William";
let lastNameUser = "Weiss";

let startValue = 5;
startValue = 4;

console.log(nameUser, lastNameUser, startValue);

// var No se debe usar 
if (startValue === 4) {
  // scope del if
  const nameUser = 'Antony';
  console.log(nameUser);  
}
console.log(startValue);
