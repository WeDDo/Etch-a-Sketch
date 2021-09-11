const divColor = "white";
<<<<<<< HEAD
const simpleBorder = "1px solid black";

const maxGridSize = 100;
const minGridSize = 0;

let gridSize = 16;
let size = 20;

let containerCreated = false;
let containerDimension = 600;
let container = document.querySelector("#container");
let promptButton = document.querySelector("#promptButton");
let clearButton = document.querySelector("#clearButton");

let paletteCreated = false;
const paletteItemCount = 8;
const paletteDimensionX = 600;
const paletteDimensionY = 200;
let palette = document.querySelector("#palette");

let currentPaintColor = "black";

let promptText = "Enter grid size[1-100]: ";

promptButton.addEventListener("click", newGrid);
clearButton.addEventListener("click", clearGrid)
document.addEventListener("contextmenu", event => event.preventDefault());

//Creates a new grid when the button #promptButton is clicked
function newGrid(event){
    gridSize = prompt(promptText, "32");

    if(gridSize == null){
        return;
    }
    else if(isNaN(gridSize)){
        promptText = "ENTERED VALUE NOT A NUMBER! Enter grid size[1-100]: ";
        newGrid(event);
        return;
    }
    else if(gridSize <= minGridSize || gridSize >= maxGridSize){
        promptText = "ENTERED NUMBER OUT OF RANGE! Enter grid size[1-100]: ";
        newGrid(event);
        return;
    }
    else{
        size = (containerDimension / gridSize) + "px";

        if(!containerCreated){
            setupContainer();
        }
        clearElementChildren(container);
        fillDrawingGrid();

        if(!paletteCreated){
            setupPalette();
            fillPalette();
        }
    }
=======
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
>>>>>>> 6e1ed6a7499174dbd3446d52b6e0c47fab77db61
}

//Set ups container based on gridSize and container dimensions
function setupContainer() {
<<<<<<< HEAD
    container.style.border = simpleBorder;
=======
    let row = "";
    let column = "";
    container.style.border = "1px solid black";
>>>>>>> 6e1ed6a7499174dbd3446d52b6e0c47fab77db61
    container.style.width = containerDimension + "px";
    container.style.height = containerDimension + "px";;
    container.style["grid-template-columns"] = `repeat(${gridSize}, size)`;
    container.style["grid-template-rows"] = `repeat(${gridSize}, size)`;
<<<<<<< HEAD

    containerCreated = true;
}

//Creates div(pixel) to add to the container(canvas)
=======
}

//Creates div to add to the container
>>>>>>> 6e1ed6a7499174dbd3446d52b6e0c47fab77db61
function createDiv() {
    let div = document.createElement("div");
    div.style.background = divColor;
    div.style.height = size;
    div.style.width = size;
<<<<<<< HEAD


    div.addEventListener("mousemove", function(event){
        event.preventDefault();
        if(event.buttons == 1){
            this.style.background = currentPaintColor;
        }
        if(event.buttons == 2){
            this.style.background = divColor;
        }
    });

    div.addEventListener("mousedown", function(event){
        event.preventDefault();
        if(event.button == 0){
            this.style.background = currentPaintColor;
        }
        if(event.button == 2){
            this.style.background = divColor;
        }
    });

    return div;
}

//Fill grid with divs(pixels) to draw on
function fillDrawingGrid() {
=======
    div.addEventListener("mouseover", divChangeColor);
    //div.addEventListener("mouseleave", divChangeColorOriginal);
    return div;
}

function addDivToGridContainer() {
>>>>>>> 6e1ed6a7499174dbd3446d52b6e0c47fab77db61
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

<<<<<<< HEAD
//Generates a random color code
=======
>>>>>>> 6e1ed6a7499174dbd3446d52b6e0c47fab77db61
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
<<<<<<< HEAD

    return color;
}

//Clear all children of a given HTML element
function clearElementChildren(element){
    while(element.lastChild){
        container.removeChild(element.lastChild);
    }
}

//Setup color palette with palette items(colors)
function setupPalette(){
    palette.style.border = simpleBorder;
    palette.style.width = paletteDimensionX + "px";
    paletteCreated = true;
}

//Fill palette with random colors
function fillPalette(){
    for(let i = 0; i < paletteItemCount; i++){
        let div = document.createElement("div");
        let divDimension = paletteDimensionX / paletteItemCount + "px";
        div.style.width = divDimension;
        div.style.height = divDimension;
        div.style.background = getRandomColor();

        div.addEventListener("click", function(event){
            currentPaintColor = event.target.style.background;
        });
        currentPaintColor = div.style.background;
        palette.appendChild(div);
    }
}

//Clear grid to original color
function clearGrid(){
    if(containerCreated){
        for(let i = 0; i < container.childNodes.length; i++){
            container.childNodes[i].style.background = divColor;
        }
    }
}
=======
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
>>>>>>> 6e1ed6a7499174dbd3446d52b6e0c47fab77db61
