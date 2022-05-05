import { createCategory, createOption } from "./createCategory.js";
import { cargarBotonesArray } from "./filterCategory.js";
import { eliminarCategoria } from "./deleteCategory.js";

export const readCategory = () => {
    const divBotons = document.getElementById("navigation__section");
    divBotons.innerHTML = '';
    const list = document.getElementById("navigation__section")

    const options = document.getElementById("select-category");
    options.innerHTML = '';
    const categoryList = JSON.parse(localStorage.getItem("categories")) || [];

    categoryList.forEach(category => {
        list.appendChild(createCategory(category));
        options.appendChild(createOption(category));
    });
    cargarBotonesArray();
    eliminarCategoria();
    
}