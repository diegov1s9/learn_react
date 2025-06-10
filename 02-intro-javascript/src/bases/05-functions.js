
const saludar = function (nombre) {
  return `Hola, ${ nombre }`;
}
console.log(saludar('DY'));

const saludar2 = (nombre) => {
  return `Hola, ${ nombre }`;
}
console.log(saludar2('D'));

const saludar3 = (nombre) => `Hola, ${ nombre }`;
console.log(saludar3('Y'));

const saludar4 = () => 'Hola mundo';
console.log(saludar4());

const getUser = () => ({
  uid: 'Ab123',
  username: 'DY_123',
});
console.log(getUser());

const getUserActive = (name) => ({
  uid: 'Ab456',
  username: name,
});

const userActive = getUserActive('F');
console.log(userActive);

