
//async permite volver en una promesa la funcion
// const getImagen = async () => {
//     return 'https://asbshbas.com';
// }

// getImagen().then(console.log);

const getImagen = async () => {

    try {

        const apiKey = '8WURIlXRbg1SU63Z3ZDVT7iGXCx4YOIp';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const {data} = await resp.json();
        const {url} = await data.images.original;
    
        const img = document.createElement('img');
            img.src = url;
            document.body.append(img);
        
    } catch (error) {
        
    }
}

getImagen();