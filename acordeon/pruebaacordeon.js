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


    }));
