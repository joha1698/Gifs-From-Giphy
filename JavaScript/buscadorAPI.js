const APIKEY= "O1uNwMQhq2WqLDukYfQ2G6VsakviRfRY";
let buscador = document.getElementById("buscador");
let iconoBusqueda = document.getElementById("iconoBusqueda");
let listaSugerencia = document.getElementById("listaSugerencia");



// función para llamar la API y para llamar la funcion que pinta los gifs
let llamadaGif = (ingresoBusqueda) =>{
    
    fetch("http://api.giphy.com/v1/gifs/search?q=" +ingresoBusqueda+ "&api_key=" +APIKEY+ "&limit=12")
        .then(respuesta=>respuesta.json()
            .then (respuestaJson => {
                console.log(respuestaJson);
                resultados.innerHTML ="";
                resultados.classList.add("grilla");
                                  
                for(let i=0; i<12; i++){
                    pintarGifs(respuestaJson.data[i].images.preview_gif.url, respuestaJson.data[i].title)
                };     
            }).catch(error => console.log(error))
        ).catch(error=>{console.log(error)}) 

};

//función que rendereiza las imagenes en el div "resultados" y agrega al local storage los favoritos
function pintarGifs(input, nombre){


   
    let imagen = document.createElement("img");
    imagen.src = input;
    imagen.classList.add("imagenesResultados");

    //creando elementos para la capa morada que se activa con hover 
    
    let div = document.createElement("div");
    div.classList.add("favorito");

    let iconoCorazon = document.createElement("img");
    iconoCorazon.src = "imagenes/icon-fav-hover.svg";

    let iconoDescargar = document.createElement("img");
    iconoDescargar.src = "imagenes/icon-download-hover.svg";

    let iconoAmpliar = document.createElement("img");
    iconoAmpliar.src = "imagenes/icon-max-hover.svg";

    let divContenedorIconos = document.createElement("div");

    iconoCorazon.classList.add("icono");
    iconoDescargar.classList.add("icono");
    iconoAmpliar.classList.add("icono");

    divContenedorIconos.appendChild(iconoCorazon);
    divContenedorIconos.appendChild(iconoDescargar);
    divContenedorIconos.appendChild(iconoAmpliar);

    divContenedorIconos.classList.add("divContenedorIconos");
    div.appendChild(divContenedorIconos);
    

    let divContenedor = document.createElement("div");
    divContenedor.appendChild(div);
    divContenedor.appendChild(imagen);
    divContenedor.classList.add("divContenedor");
    resultados.appendChild(divContenedor);

    let nombreGif = nombre; 
    //agregando  favoritos al local storage
    iconoCorazon.addEventListener("click", ()=>{
        localStorage.setItem(nombreGif, imagen.src)
    });

}





//Segunda llamada a la API para traer las sugerencias de autocompletador en el buscador
    
let llamadaAutocompletador = ()=>{
    
    fetch("https://api.giphy.com/v1/tags/related/"+buscador.value+"?api_key="+APIKEY)
        .then(respuesta=>respuesta.json()
            .then(respuestaJson=>{
                console.log(respuestaJson)
                pintarSugerencia(respuestaJson.data);
            })
            .catch(error=>console.log(error)))
        .catch(error=>console.log(error))
}

let pintarSugerencia= (sugerencias)=>{
    listaSugerencia.innerHTML = "";
    sugerencias.forEach((sugerencia)=>{
        var nuevoLista = document.createElement("li");
        var vinculo = document.createElement("a");
        var icono = document.createElement("img");
        var parrafo = document.createElement("p");
        
        vinculo.addEventListener("click", ()=>{
            llamadaGif(parrafo.innerHTML)
        })


        icono.src = "/imagenes/icon-search-mod-noc.svg";
        parrafo.textContent = sugerencia.name;

        vinculo.appendChild(icono);
        vinculo.appendChild(parrafo);
        nuevoLista.appendChild(vinculo);

        listaSugerencia.insertAdjacentElement("beforeend", nuevoLista);

        menuSugerencia.classList.add("divEstilos");
        listaSugerencia.classList.add("ulEstilos");
        nuevoLista.classList.add("liEstilos");
        vinculo.classList.add("aEstilos");
        icono.classList.add("imgEstilos");
        parrafo.classList.add("pEstilos");


        //escuchador de eventos en la lista de sugerencias
        let sugerencias = listaSugerencia.querySelectorAll("a");
        sugerencias.forEach((enlaces)=>{enlaces.addEventListener("click", ()=>{
            llamadaGif(parrafo.innerHTML)
        })})
      

    })}



//ejecucion ordinaria (por el buscador) de las dos funciones principales (traer gifs y autocompletar)
buscador.addEventListener("input", ()=>llamadaGif(buscador.value));
buscador.addEventListener("keydown", llamadaAutocompletador);


