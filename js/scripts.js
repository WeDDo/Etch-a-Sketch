let size = "20px";
let containerDimension = 600;
let gridSize = 16;

let container = document.querySelector("#container");
let button = document.querySelector("#promptButton");

button.addEventListener("click", (e) => {
    gridSize = prompt("Enter grid size: ", "16");
    console.log(containerDimension / gridSize)
    size = (containerDimension / gridSize) + "px";
    setupContainer();
    clearContainer();
    addDivToGridContainer();
});

function setupContainer() {
    let row = "";
    let column = "";
    container.style.width = containerDimension + "px";
    container.style.height = containerDimension + "px";;
    container.style["grid-template-columns"] = `repeat(${gridSize}, size)`;
    container.style["grid-template-rows"] = `repeat(${gridSize}, size)`;
}

function createDiv() {
    let div = document.createElement("div");
    div.style.background = "red";
    div.style.height = size;
    div.style.width = size;
    div.addEventListener("mouseover", divChangeColor);
    //div.addEventListener("mouseleave", divChangeColorOriginal);
    return div;
}

function addDivToGridContainer() {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            let div = createDiv();
            div.style["grid-column-start"] = i;
            div.style["grid-column-end"] = i + 1;
            div.style["grid-row-start"] = j;
            div.style["grid-row-end"] = j + 1;
            container.appendChild(div);
        }
    }
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function clearContainer(){
    while(container.lastChild){
        container.removeChild(container.lastChild);
    }
}

function divChangeColor(e) {
    e.target.style.background = getRandomColor();
}

function divChangeColorOriginal(e) {
    e.target.style.background = "red";
}
