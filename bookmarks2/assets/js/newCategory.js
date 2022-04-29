import {createCategory} from "./createCategory.js"
import { createOption } from "./createCategory.js";
import { cargarBotonesArray } from "./filterCategory.js";


const inputNameCategory = document.getElementById("input-name-category");
const inputColorCategory = document.getElementById("input-color-category");
const sectionCategories = document.getElementById("navigation__section");

const selectCategories = document.getElementById("select-category");

export const addCategory = () => {
    //const nombre = inputNameCategory.value;
    const colorHex = inputColorCategory.value;

    //inputNameCategory.value='';
    inputColorCategory.value='#000000';

    const categoryObj = {
        colorHex
    }

      //localStorage
      const categoryList = JSON.parse(localStorage.getItem("categories")) || []; //Con ||, le decimos a la aplicación que en caso de que localStorage este con datos se comporte de una manera, si en caso contrario estuviera vacío, la constante tasks empezaría como un arreglo vacío. 
      categoryList.push({colorHex});
      localStorage.setItem("categories", JSON.stringify(categoryList));
  
      const category = createCategory(categoryObj);
      sectionCategories.appendChild(category);

      const option = createOption(categoryObj);
      selectCategories.appendChild(option);

      
    console.log(colorHex)
}