import {deleteIcon} from "./deleteIcon.js";

export const createCard = ({ nombre, url, category, img}) => {
    const container = document.createElement('div');
    container.classList.add('url-site');
    container.setAttribute("categoria", category);
    container.setAttribute("id", `ID${url}`);
    const direc = document.createElement('a');
    direc.setAttribute("href", url);
    direc.setAttribute("target", "_blank");

    const card = document.createElement('article');
    card.classList.add('card');
    card.style.backgroundImage  = `url(${img})`;

    const cardContent = document.createElement('div');
    cardContent.classList.add('name_card');

    //const nameSite = document.createElement('p');
    //nameSite.classList.add('name_site');

    //nameSite.innerText = nombre;

    container.appendChild(direc);
    direc.appendChild(card);
    card.appendChild(cardContent);
    //cardContent.appendChild(nameSite);
    container.appendChild(deleteIcon(url));

    return container;
};
