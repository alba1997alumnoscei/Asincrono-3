//-----------------------------------------------------------------------------------------------------------------------------------------//
// 1. Declaro variables 
//-----------------------------------------------------------------------------------------------------------------------------------------//

const titulos = document.querySelectorAll('.title');                    //--> optimización: no se puede porque no es etiqueta hija
const informaciones = document.querySelectorAll('.info');               //--> optimización: no se puede porque no es etiqueta hija

//-----------------------------------------------------------------------------------------------------------------------------------------//
//2. Funciones
//-----------------------------------------------------------------------------------------------------------------------------------------//

//FOREACH: en los titulos, cuando hago click 
titulos.forEach(title => {

    title.addEventListener("click", () => {
       
       const goId = title.getAttribute("data-info"); //va al target 
       

        //Foreach en la info + CONDICIONAL                              // <-- optimización: optimización de condicional con &&  
        informaciones.forEach(info => {
        goId = true

        if (goId){
            goId && info.classList.add("active") //para que se muestre
        } else {info.classList.remove("active")  //para que no se muestre 

        }

        //Otra manera de hacer el condicional también válida 
           /*  if (info.id === goId) {
                info.classList.add("active");
            } else {
                info.classList.remove("active");
            } */
        });

        

        //for each para quitar y añadir el sombreado
        titulos.forEach(title =>
            title.classList.remove("sombreado"));

        title.classList.add("sombreado");

    });

});