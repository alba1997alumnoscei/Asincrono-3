// 1. Declaro variables 
const acordeon = document.querySelector(".acordeon");
const headers = document.querySelectorAll(".acordeon-header");
const acordeonItems = document.querySelectorAll(".acordeon-item");

// 2. Funciones: 
// foreach en los headers 
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

//Event listener de mouseover y mouseout, con clase de sombreado.
    header.addEventListener("mouseover", () => {
        header.classList.add("sombreado");
    });

    header.addEventListener("mouseout", () => {
        header.classList.remove("sombreado");
    });
    

 


});

// 3. Ejecutamos codigo
acordeonItems[0].classList.add('active');
