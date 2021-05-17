// function saludar(nombre){
//     return `Hola, ${nombre}`;
// }

// const saludar = function (nombre){
//     return `Hola, ${nombre}`;
// }

// const saludar2 = (nombre) => {
//     return `Hola, ${nombre}`;
// } 

// const saludar3 = (nombre) => `Hola, ${nombre}`; 

// console.log(saludar2('juan'));

// const getUser = () => ({
//         uid: 'ABC123',
//         username: 'Papi123',
// });

//TAREA

// function getUserActivo (nombre) {
//     return {
//         uid: 'ABC123',
//         username: nombre,
//     }
// }

const getUserActivo = (nombre) => ({
    uid: 'ABC123',
    username: nombre,
});

const usuarioActivo = getUserActivo('Juan');
console.log(usuarioActivo);

