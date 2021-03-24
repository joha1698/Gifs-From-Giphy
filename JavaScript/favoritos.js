//haciendo la petición a la API de las imagenes que hay en el Local Storage

let favoritosConResultados = document.getElementById("favoritosConResultados");

let llamadaGif = (ingresoBusqueda) =>{
    
    fetch("http://api.giphy.com/v1/gifs/search?q=" +ingresoBusqueda+ "&api_key=" +APIKEY+ "&limit=12")
        .then(respuesta=>respuesta.json()
            .then (respuestaJson => {
                console.log(respuestaJson);
                favoritosConResultados.innerHTML ="";
                favoritosConResultados.classList.add("grilla");
                                  
                for(let i=0; i<12; i++){
                    pintarGifs(respuestaJson.data[i].images.preview_gif.url, respuestaJson.data[i].title)
                };     
            }).catch(error => console.log(error))
        ).catch(error=>{console.log(error)}) 

};


//renderizando las imagenes del Local Storage

function pintarGifs(input){


    let imagen = document.createElement("img");
    imagen.src = input;
    imagen.classList.add("imagenesResultados");

    let divContenedor = document.createElement("div");
    divContenedor.appendChild(imagen);
    divContenedor.classList.add("divContenedor");
    favoritosConResultados.appendChild(divContenedor);

    
    /*let nombreGif = nombre; 
    //agregando  favoritos al local storage
    iconoCorazon.addEventListener("click", ()=>{
        localStorage.setItem(nombreGif, imagen.src)
    });*/

}


//ejecución de función principal

function recorriendoElLocalStorage(){
    for (var i = 0; i < localStorage.length; i++){
        let recorrido = localStorage.getItem(localStorage.key(i));
        console.log(recorrido);
        pintarGifs(recorrido)
    }
}

recorriendoElLocalStorage()