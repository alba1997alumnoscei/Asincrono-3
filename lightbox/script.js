 //1. Declaramos variables 

 document.addEventListener('DOMContentLoaded', function () {
    const contenido = document.querySelector(".content");
    const imgGrande = document.querySelector(".grande");
    const cerrarBoton = document.querySelector(".cerrarButton"); 

    contenido.addEventListener("click", () => {
        imgGrande.style.display = "flex";
    });

    cerrarBoton.addEventListener("click", () => {
        imgGrande.style.display = "none";
    });
});