import { getHeroeById } from "./bases/08-imp-exp";

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         resolve(heroe);
//         // reject('No se pudo encontrar el héroe');
//     }, 2000);
// });

// promise.then((heroe) => {
//     console.log(heroe);
// })
// .catch((err) => {
//     console.warn(err);
// })

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            const heroe = getHeroeById(id);
            resolve(heroe)
        }, 2000)
    })
}

getHeroeByIdAsync(3)
    .then( heroe => console.log('Heroe', heroe))
    .catch( err => console.log('errora'));