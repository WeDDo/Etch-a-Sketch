const divColor = "white";
let size = "20px";
let containerDimension = 600;
let gridSize = 16;

let container = document.querySelector("#container");
let button = document.querySelector("#promptButton");

button.addEventListener("click", newGrid);

//Creates a new grid when the button #promptButton is clicked
function newGrid(e){
    gridSize = prompt("Enter grid size: ", "16");
    if(gridSize <= 0){
        newGrid(e);
        return;
    }
    size = (containerDimension / gridSize) + "px";
    setupContainer();
    clearContainer();
    addDivToGridContainer();
}

//Set ups container based on gridSize and container dimensions
function setupContainer() {
    let row = "";
    let column = "";
    container.style.border = "1px solid black";
    container.style.width = containerDimension + "px";
    container.style.height = containerDimension + "px";;
    container.style["grid-template-columns"] = `repeat(${gridSize}, size)`;
    container.style["grid-template-rows"] = `repeat(${gridSize}, size)`;
}

//Creates div to add to the container
function createDiv() {
    let div = document.createElement("div");
    div.style.background = divColor;
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
    e.target.style.background = divColor;
}
