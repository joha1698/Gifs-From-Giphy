const APIKEY= "O1uNwMQhq2WqLDukYfQ2G6VsakviRfRY";

let trendingApi = ()=>{
    fetch("http://api.giphy.com/v1/gifs/trending?api_key="+APIKEY+"&limit=20")
    .then(respuesta=>{
        respuesta.json()
            .then(respuestaJson=>{
                console.log(respuestaJson);

                for(let i=0; i<20; i++){
                    pintarTrendingsDestacados(respuestaJson.data[i].images.preview_gif.url)
                }
                
            })
            .catch(error=>{console.log(error)})
    })
    .catch(error=>console.log(error));
}

trendingApi();



//función que rendereiza las imagenes de los trendings en el div "contenedorCarrusel"
let pintarTrendingsDestacados = (urlTrending)=>{
    let imagen = document.createElement("img");
    imagen.src = urlTrending;
    imagen.classList.add("imagenesResultados");

    let div1 = document.createElement("div");
       
    div1.classList.add("gifCarrusel")
    div1.appendChild(imagen);
    carrusel.appendChild(div1);
    fila.appendChild(carrusel);
    contendorPrincipalCarrusel.appendChild(fila);
    trending.appendChild(contendorPrincipalCarrusel);

}
