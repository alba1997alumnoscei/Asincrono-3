/*----------------------------------------------------------------------------------------------------*/
//1. Declaramos variables 
//---------------------------------------------------------------------------------
 document.addEventListener('DOMContentLoaded', function () {
    const contenido = document.querySelector(".content"); //imagen 
    const imgGrande = document.querySelector(".grande"); //imagen agrandada
    const cerrarBoton = document.querySelector(".cerrarButton"); //botón de cerrar
/*----------------------------------------------------------------------------------------------------*/
//2. Funciones
/*----------------------------------------------------------------------------------------------------*/

//cuando hago click sobre la imagen ".content" la imagen grande se muestra (flex)
    contenido.addEventListener("click", () => {
        imgGrande.style.display = "flex";
    });

//cuando hago click sobre el botón ".cerrarButton" la imagen grande desaparece (none)
    cerrarBoton.addEventListener("click", () => {
        imgGrande.style.display = "none";
    });
});

