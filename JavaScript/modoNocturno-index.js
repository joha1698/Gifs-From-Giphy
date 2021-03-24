
//Trayendo los elementos del DOM a los que les voy a intervenir en el modo oscuro
let modo = document.getElementById("modo");
let favorito = document.getElementById("favorito");
let div = document.getElementById("menu");

let hamburguesa1 = document.getElementsByClassName("hamburguesa1");

let main = document.getElementsByTagName("main");
let tituloPrincipal = document.getElementById("tituloPrincipal");
let tituloTrending = document.getElementById("tituloTrending");
let busquedasTrending = document.getElementsByClassName("busquedasTrending");
let tituloResultadoTrendings = document.getElementById("tituloResultadoTrendings");
let descripcionResultados = document.getElementById("descripcionResultados");
let misGifos = document.getElementById("misGifos");
let resultados = document.getElementById("resultados");
let menuSugerencia = document.getElementById("menuSugerencia");
let sugerenciaTrendings = document.getElementById("sugerenciaTrendings");
let listaSugerenciaTrendings = document.getElementById("listaSugerenciaTrendings");
let enlacesSugerenciaTrendings = document.getElementsByClassName("enlace");

//trayendo los elementos de la pagina favoritos
let favoritos = document.getElementById("favoritos");


modo.addEventListener("click", cambiarModo);


//agregandole a los elementos una clase, que cambia los estilos modo oscuro/claro

function cambiarModo() { 
    var colorbody = document.body; 
    colorbody.classList.toggle("dark");
    div.classList.toggle("dark");
    menuSugerencia.classList.toggle("dark");
    sugerenciaTrendings.classList.toggle("dark");
    hamburguesa1[0].classList.toggle("lineasBlancas");
    hamburguesa1[1].classList.toggle("lineasBlancas");
    hamburguesa1[2].classList.toggle("lineasBlancas");
    main[0].classList.toggle("darkMain");
    tituloPrincipal.classList.toggle("letraClara");
    tituloTrending.classList.toggle("letraClara");
    busquedasTrending[0].classList.toggle("letraClara");
    busquedasTrending[1].classList.toggle("letraClara");
    busquedasTrending[2].classList.toggle("letraClara");
    busquedasTrending[3].classList.toggle("letraClara");
    busquedasTrending[4].classList.toggle("letraClara");
    tituloResultadoTrendings.classList.toggle("letraClara");
    descripcionResultados.classList.toggle("letraClara");
    favorito.classList.toggle("letraClara");
    modo.classList.toggle("letraClara");
    misGifos.classList.toggle("letraClara");
    listaSugerenciaTrendings.classList.toggle("letraClara");
    enlacesSugerenciaTrendings[0].classList.toggle("letraClara");

    //elementos de la pagina favoritos

    favoritos.classList.toggle("dark");
    trending.classList.toggle("dark");


    
}

