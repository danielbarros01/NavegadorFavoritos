import { createCard } from "./createCard.js";
import { readCard } from "./readCard.js";

//btns
const btnOpenAdd = document.querySelector("[button-add-card]");
const btnCloseAdd = document.querySelector("[btn-close-card]");
const seccionAdd = document.getElementById("sectionNew");


//donde estan las cards en el html
const seccionCards = document.getElementById("main__cards");

//values
const inputUrl = document.getElementById("input-url");
const inputCategory = document.getElementById("select-category");
const inputImage = document.getElementById("input-img");

//const newCategory = document.getElementById("newCategory")

btnOpenAdd.addEventListener("click", () => {
    seccionAdd.classList.remove("management");
});


btnCloseAdd.addEventListener("click", () => {
    seccionAdd.classList.add("management");
});

export const addCard = () => {
    //seccionAdd.classList.add("management");

    const url = inputUrl.value;
    const category = inputCategory.value;
    const img = inputImage.value;

    inputUrl.value = '';
    inputImage.value= '';

    const cardObj = {
        url,
        category,
        img
    }
    
    seccionCards.innerHTML = '';
    
    //localStorage
    const cardList = JSON.parse(localStorage.getItem("cards")) || []; //Con ||, le decimos a la aplicación que en caso de que localStorage este con datos se comporte de una manera, si en caso contrario estuviera vacío, la constante tasks empezaría como un arreglo vacío. 
    cardList.push({url,category,img});
    localStorage.setItem("cards", JSON.stringify(cardList));

    readCard();
};


