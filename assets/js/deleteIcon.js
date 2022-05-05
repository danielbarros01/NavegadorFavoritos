import { readCard } from "./readCard.js";

const seccionCards = document.getElementById("main__cards");

let svgHijo;

export const deleteIcon = (id) => {
  const svgDiv = document.createElement('div');

  const svg = `<svg height="30px" viewBox="0 0 70 70" width="30px" id="iconDelete">
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

  Swal.fire({
    title: 'Are you sure?',
    text: "do you want to delete this site?",
    icon: 'warning',
    background: '#251D3A',
    iconColor: '#ffffff',
    color: '#ffffff',
    showCancelButton: true,
    confirmButtonColor: '#357C3C',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      //elimino del html
      const cards = JSON.parse(localStorage.getItem("cards"));
      const index = cards.findIndex((item) => item.url == id);
      cards.splice(index, 1);
      console.log(index);
      console.log(cards);
      localStorage.setItem("cards", JSON.stringify(cards));

      seccionCards.innerHTML = '';
      readCard();
    }
  })

};


