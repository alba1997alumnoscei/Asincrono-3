// 1. Declaro variables 

const titulos = document.querySelectorAll('.title');
const informaciones = document.querySelectorAll('.info');


//2. Funciones

titulos.forEach(title => {
    title.addEventListener("click", () => {
        const goId = title.getAttribute("data-info");
        informaciones.forEach(info => {
            if (info.id === goId){
                info.classList.add("active");
            }else{
                info.classList.remove("active");
            }
        });

    });
});