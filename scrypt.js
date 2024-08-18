const divContainer = document.querySelector("div#divContainer");
const divParent = document.createElement("div");
const divChild = document.createElement("div");
divChild.classList.add("child");
divParent.classList.add("parent");
divParent.style.cssText = "display: flex; flex-direction: column; " +
"padding: 0px; margin: 0px; width: 100%; justify-content: space-around;";
divChild.style.cssText = "padding: 0px; margin: 0px; height: 100%";
let amountOfDivs = 16;

function createGrid(amount){
    for (let index = 0; index < amount; index++) {       
        divContainer.appendChild(divParent.cloneNode(true));
        console.log("div inserted");
    }
}

createGrid(amountOfDivs);