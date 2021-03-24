
//Trayendo los elementos del DOM a los que les voy a intervenir en el modo oscuro
let modo = document.getElementById("modo");
let favorito = document.getElementById("favorito");
let div = document.getElementById("menu");

let hamburguesa1 = document.getElementsByClassName("hamburguesa1");

let main = document.getElementsByTagName("main");

//trayendo los elementos de la pagina favoritos
let favoritos = document.getElementById("favoritos");
let trendingFavorito = document.getElementById("trendingFavorito");


modo.addEventListener("click", cambiarModo);


//agregandole a los elementos una clase, que cambia los estilos modo oscuro/claro

function cambiarModo() { 
    var colorbody = document.body; 
    colorbody.classList.toggle("dark");
    div.classList.toggle("darkMain");

    favoritos.classList.toggle("dark");
    trendingFavorito.classList.toggle("darkMain");
    main[0].classList.toggle("darkMain");


    
}

