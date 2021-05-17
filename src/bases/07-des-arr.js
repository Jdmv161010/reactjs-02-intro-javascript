// const personajes = ['Goku', 'Vegeta', 'Trunks'];

// const [p1, ,p3] = personajes;
// console.log(p1, p3);


// const retornaArreglo = () => {
//     return ['ABC', 123];
// }

// const [letras, numeros] = retornaArreglo();
// console.log(letras, numeros);

//Tarea

const usState = (valor) => {
    return [valor, () => {console.log('Hola mundo')}];
}

const [nombre, setNombre] = usState('Goku');
console.log(nombre);
setNombre();
