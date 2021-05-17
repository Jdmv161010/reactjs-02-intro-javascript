const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'Ironman',
    rango: 'Soldado',
};


const usContext = ({clave, edad,}) => {
    return {
        nombreClave: clave,
        anios: edad
    }
}

const {nombreClave, anios} = usContext(persona);
console.log({nombreClave, anios});
