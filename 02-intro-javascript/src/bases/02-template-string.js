const name = "Diego";
const lastName = "V";

//const fullName = name + ' ' + lastName;
const fullName = ` ${ name } ${ lastName }`;
console.log(fullName);


function getSaludo(fullName) {
  return `Hola ${fullName}`;
}
console.log(`texto: ${ getSaludo( fullName) }`);
