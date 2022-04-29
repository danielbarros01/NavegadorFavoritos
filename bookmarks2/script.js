import { addCard } from "./assets/js/newCard.js";
import { readCard } from "./assets/js/readCard.js";

import { newCategory } from "./assets/js/createCategory.js";
import { addCategory } from "./assets/js/newCategory.js";
import {readCategory} from "./assets/js/readCategory.js";
import { cargarBotonesArray } from "./assets/js/filterCategory.js";

const btnAdd = document.querySelector("[btn-add-newCard]");
btnAdd.addEventListener('click', addCard);

//new category
const btnAddNewCategory = document.querySelector("[btn-add-newCategory]");
btnAddNewCategory.addEventListener('click',addCategory);

readCard();
newCategory();
readCategory();

cargarBotonesArray();