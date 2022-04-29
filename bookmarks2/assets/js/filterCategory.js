
const botones = [];

export const cargarBotonesArray = () => {
    const categoriesObjs = JSON.parse(localStorage.getItem("categories")) || [];
    const categories = categoriesObjs;

    categories.forEach(category => {
        console.log(category.colorHex);
        botones.push(document.getElementById(`category${category.colorHex}`));
    });

    const tarjetas = document.querySelectorAll(".url-site");

    //filtra las tarjetas por secciones
    tarjetas.forEach(tarjeta => {
        botones.forEach(boton => {

            boton.addEventListener('click', () => {
                if (boton.attributes.id.value != `category${tarjeta.attributes.categoria.value}`) {
                    tarjeta.classList.toggle("management");
                };       
                                
                boton.classList.toggle("seleccionado");

                console.log(boton.classList)
                //console.log(tarjeta.attributes.categoria.value)
            });

        })

    });

    /*ojo.addEventListener('click', () => {
        tarjetas.forEach(tarjeta => {
            tarjeta.classList.remove("management");
        });
    });*/
}


