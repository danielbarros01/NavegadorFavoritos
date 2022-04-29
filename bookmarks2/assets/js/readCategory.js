import { createCategory, createOption } from "./createCategory.js";

export const readCategory = () => {
    const list = document.getElementById("navigation__section")

    const options = document.getElementById("select-category");

    const categoryList = JSON.parse(localStorage.getItem("categories")) || [];

    categoryList.forEach(category => {
        list.appendChild(createCategory(category));
        options.appendChild(createOption(category));
    });
}