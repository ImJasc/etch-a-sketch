const divContainer = document.querySelector("div#divContainer");
const divParent = document.createElement("div#Parent");
const divChild = document.createElement("div#Child");
divParent.style.cssText = "display: flex; flex-direction: column; " +
"padding: 0px; margin: 0px;";
divChild.style.cssText = "padding: 0px; margin: 0px;";
let amountOfDivs = 16;

function createGrid(amountOfDivs){
    for (let index = 0; index < amountOfDivs; index++) {       
        divContainer.appendChild(divParent);
        console.log("div inserted");
    }
}
