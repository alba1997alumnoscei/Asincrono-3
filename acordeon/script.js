//-----------------------------------------------------------------------------------------------------------------------------------------//
// 1. Declaro variables 
//-----------------------------------------------------------------------------------------------------------------------------------------//
const acordeon = document.querySelector(".acordeon");               
const headers = acordeon.querySelectorAll(".acordeon-header");                          //--> optimización: etiqueta hija con contenedor.querySelector
const acordeonItems = acordeon.querySelectorAll(".acordeon-item");                      //--> optimización: etiqueta hija con contenedor.querySelector


//-----------------------------------------------------------------------------------------------------------------------------------------//
// 2. Funciones: 
//-----------------------------------------------------------------------------------------------------------------------------------------//
// FOREACH: en los headers 
headers.forEach(header => {
    //eventListener al hacer click 
    header.addEventListener("click", () => {
        //el más cercano 
        const item = header.closest(".acordeon-item");

        //quitar "active"
        acordeonItems.forEach(elemento => {
            elemento.classList.remove("active");
        })

        //agregar "active"
        item.classList.add("active");


    });

//EVENT LISTENER de mouseover y mouseout, con clase de sombreado.
    header.addEventListener("mouseover", () =>  header.classList.add("sombreado"));     //--> función arrow sintetizada quitando {}
    header.addEventListener("mouseout", () => header.classList.remove("sombreado"));    //--> función arrow sintetizada quitando {}

//Otro tipo de optimización con Funciones Handler también válida 

// ------ para el mouseover
    // const headerHandler = () => header.classList.add("sombreado")
    // header.addEventListener("mouseover", headerHandler);

// ------ para el mouseout
    // const miheaderHandler = () => header.classList.remove("sombreado")
    // header.addEventListener("mouseout", headerHandler);
 


});
//-----------------------------------------------------------------------------------------------------------------------------------------//
// 3. Ejecutamos codigo
//-----------------------------------------------------------------------------------------------------------------------------------------//
acordeonItems[0].classList.add('active');
