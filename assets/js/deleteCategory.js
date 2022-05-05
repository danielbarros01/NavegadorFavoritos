import { readCategory } from "./readCategory.js";

const navSection = document.getElementById("navigation__section");

export const deleteSvg = (id) => {
  const divRemove = document.createElement('div');
  divRemove.setAttribute("id", id);
  divRemove.classList.add("divSvgExitCategory");
  const svgRemove = `<svg class="rmvCategory" style="enable-background:new 0 0 512 512;" viewBox="0 0 512 512" xml:space="preserve"><path d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/></svg>`;

  divRemove.innerHTML = svgRemove;

  return divRemove;

};

const deleteCategory = (id) => {

  Swal.fire({
    title: 'Are you sure?',
    text: "you want to delete this category?",
    icon: 'warning',
    background:'#251D3A' ,
    iconColor:'#ffffff',
    color:'#ffffff',
    toast:true,
    position:'top-start',
    showCancelButton: true,
    confirmButtonColor: '#2155CD',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Delete'
  }).then((result) => {
    if (result.isConfirmed) {
      //elimino del html
      const categories = JSON.parse(localStorage.getItem("categories"));
      const index = categories.findIndex((item) => `category${item.colorHex}` == id);

      categories.splice(index, 1);
      console.log(index);

      localStorage.setItem("categories", JSON.stringify(categories));

      navSection.innerHTML = '';
      console.log("fas")
      readCategory();

    }
  })


};

export const eliminarCategoria = (categoria) => {
  //obtener botones
  const btnsExit = document.querySelectorAll(".rmvCategory");

  btnsExit.forEach(boton => {
    const divPadre = boton.parentNode;
    boton.addEventListener("click", () => deleteCategory(`category${divPadre.id}`));
  });
}