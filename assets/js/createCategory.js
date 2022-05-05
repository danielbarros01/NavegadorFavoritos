import { deleteSvg } from "./deleteCategory.js";

const btnCloseCategory = document.querySelector("[btn-close-category]");
const btnAddCategory = document.querySelector("[btn-newCategory]");

const sectionCategory = document.getElementById("sectionNewCategory");

export function newCategory() {
    btnCloseCategory.addEventListener("click", () => {
        sectionCategory.classList.add("management");
    });

    btnAddCategory.addEventListener("click", () => {
        sectionCategory.classList.remove("management");
    });
}

export const createCategory = ({ colorHex }) => {
    const div = document.createElement('div');
    const svg = `<svg style="fill:${colorHex}"height="48" viewBox="0 0 512 512" xml:space="preserve" class="btn-category" id="category${colorHex}">
    <title>${colorHex}</title>
    <g>
        <g>
            <path
                d="M256,48C141.1,48,48,141.1,48,256s93.1,208,208,208c114.9,0,208-93.1,208-208S370.9,48,256,48z M256,446.7    c-105.1,0-190.7-85.5-190.7-190.7c0-105.1,85.5-190.7,190.7-190.7c105.1,0,190.7,85.5,190.7,190.7    C446.7,361.1,361.1,446.7,256,446.7z" />
        </g>
    </g>
    <g>
        <g>
            <path
                d="M256,96c-88.4,0-160,71.6-160,160c0,88.4,71.6,160,160,160c88.4,0,160-71.6,160-160C416,167.6,344.4,96,256,96z" />
        </g>
    </g>
</svg>`;
    
    div.appendChild(deleteSvg(colorHex));
    div.innerHTML += svg;

    return div;
}

export const createOption = ({ colorHex }) => {
    const option = document.createElement("option");

    option.value = colorHex;
    option.text = colorHex;
    option.style.backgroundColor = colorHex;
    option.style.checked = colorHex;

    
    return option;
}



