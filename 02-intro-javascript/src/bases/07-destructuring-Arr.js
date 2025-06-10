const characters = ['Goku', 'Vegeta', 'Trunks'];
const [ , ,p3] = characters;
console.log(p3);

const returnArray = () => (['ABC',123]);
const [letters, numbers] = returnArray();
console.log(letters,numbers);

const customUseState = ( value ) => {
    return [ value, () => { console.log('Hello World'); }]
}
const [nombre, setNombre] = customUseState('Goku');
console.log(nombre);
setNombre();