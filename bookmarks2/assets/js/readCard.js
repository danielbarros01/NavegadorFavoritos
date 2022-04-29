import { createCard } from "./createCard.js"; 

export const readCard = () => {
    const list = document.getElementById("main__cards")

    const cardList = JSON.parse(localStorage.getItem("cards")) || [];
    
    cardList.forEach(card => {
        list.appendChild(createCard(card))
    });
}