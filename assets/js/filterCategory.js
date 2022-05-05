const botones = [];
let tarjetas = [];

export const buscarTarjetas = () => {
    tarjetas = document.querySelectorAll(".url-site");
}

export const cargarBotonesArray = () => {
    const categoriesObjs = JSON.parse(localStorage.getItem("categories")) || [];
    const categories = categoriesObjs;
    categories.forEach(category => {
        botones.push(document.getElementById(`category${category.colorHex}`));
    });

    buscarTarjetas();
    tarjetas.forEach(tarjeta => {
        botones.forEach(boton => {
            boton.addEventListener('click', () => {
                        
                if (boton.attributes.id.value != `category${tarjeta.attributes.categoria.value}`) {
                    tarjeta.classList.toggle("management");
                }
            });
        })

    });

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            
            boton.classList.toggle("seleccionado");
                            
        });
    })

}


