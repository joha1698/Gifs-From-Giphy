
let trendingApi = ()=>{
    fetch("http://api.giphy.com/v1/gifs/trending?api_key="+APIKEY+"&limit=20")
    .then(respuesta=>{
        respuesta.json()
            .then(respuestaJson=>{
                console.log(respuestaJson);

                for(let i=0; i<5; i++){
                    pintarTrendings(respuestaJson.data[i].title);

                }
                
          
                for(let i=0; i<20; i++){
                    pintarTrendingsDestacados(respuestaJson.data[i].images.preview_gif.url)
                }
                
            })
            .catch()
    })
    .catch(error=>console.log(error));
}

trendingApi();

//mostrando los trending en el DOM

let pintarTrendings = (input)=>{

    let nuevo = document.createElement("li");
        let enlace = document.createElement("a");
        listaSugerenciaTrendings.insertAdjacentElement("beforeend", nuevo);
        
        enlace.textContent = input;
        nuevo.appendChild(enlace);
        listaSugerenciaTrendings.appendChild(nuevo);

        enlace.addEventListener("click", ()=>{
            llamadaGif(enlace.innerHTML)
        })

        nuevo.classList.add("listaTrending");


        /*
    for(let i=0; i<8; i++){
        

    }

*/


   /* inputUsarnames.forEach((inputUsarname)=>{
        let nuevo = document.createElement("li");
        let enlace = document.createElement("a");
        listaSugerenciaTrendings.insertAdjacentElement("beforeend", nuevo);
        
        enlace.textContent = inputUsarname.title;
        nuevo.appendChild(enlace);
        listaSugerenciaTrendings.appendChild(nuevo);

        enlace.addEventListener("click", ()=>{
            llamadaGif(enlace.innerHTML)
        })

        nuevo.classList.add("listaTrending");
        nuevo.classList.add("letraBlanca");
        
    })*/

}


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
