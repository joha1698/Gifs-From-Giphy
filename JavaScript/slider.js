let fila = document.getElementById("contenedorCarrusel");
let gifCarrusel = document.getElementsByClassName("gifCarrusel");
let flechaIzquierda = document.getElementById("flechaIzquierda");
let flechaDerecha = document.getElementById("flechaDerecha");
let carrusel = document.getElementById("carrusel");
let contendorPrincipalCarrusel = document.getElementById("contendorPrincipalCarrusel");
let trending = document.getElementById("trending");

flechaDerecha.addEventListener("click", ()=>{
    fila.scrollLeft = fila.scrollLeft + fila.offsetWidth;
})

flechaIzquierda.addEventListener("click", ()=>{
    fila.scrollLeft = fila.scrollLeft - fila.offsetWidth;
})


//La función que pinta los trendings en el slider se encuentra en el archivo trendingAPI



