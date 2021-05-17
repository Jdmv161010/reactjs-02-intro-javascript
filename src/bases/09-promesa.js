import { getHeroById, getHeroesByOwner } from './bases/08-imp-exp';

// const promesa = new Promise( (resolve, reject) => (
//     setTimeout( () => {
//         const heroe = getHeroById(2);
//         resolve(heroe);
//         //reject('No se encuentra el heroe');
//     }, 2000)
// ));

// promesa
//     .then((heroe) => console.log('heroe: ', heroe))
//     .catch( err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve, reject) => (
        setTimeout( () => {
            const heroe = getHeroById(2);

            if (heroe) {
                resolve(heroe);
            } else {
                reject('No se encuentra el heroe');
            }
 
        }, 2000)
    ));
}

getHeroeByIdAsync(3)
    .then( console.log )
    .catch( console.warn );
    
