import { readCard } from "./readCard.js";
const seccionCards = document.getElementById("main__cards");

let svgHijo;

export const deleteIcon = (id) => {
    const svgDiv = document.createElement('div');

    const svg = `<svg height="30px" viewBox="0 0 70 70" width="30px" id="iconDelete" style="fill:#B22727">
    <g>
      <g>
        <path d="M46,29v25H24V29H46 M50,25H20v33h30V25L50,25z"></path>
        <path d="M39,19v-3h-8v3H18v4h34v-4H39z"></path>
      </g>
      </g>  
     </svg>`;

    svgDiv.innerHTML = svg;
    svgDiv.classList.add("div-iconRemove")

    svgHijo = svgDiv.children[0];

    svgHijo.addEventListener('click', () => deleteTask(id));

    return svgDiv;
};

const deleteTask = (id) => {
  //elimino del html
    const cards = JSON.parse(localStorage.getItem("cards"));
    const index = cards.findIndex((item) => item.url == id);
    cards.splice(index,1);
    console.log(index);
    console.log(cards);
    localStorage.setItem("cards", JSON.stringify(cards));

    seccionCards.innerHTML = '';
    readCard();
};

