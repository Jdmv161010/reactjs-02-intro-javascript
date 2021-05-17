const persona = {
    nombre: 'Juan',
    apellido: 'Munoz',
    edad: 45,
    direccion:{
        ciudad: 'Pop',
        zip: 123,
        lng: 34.3421,
    }
};

console.table(persona);

const persona2 = {...persona};