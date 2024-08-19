const divContainer = document.querySelector("div#divContainer");
const divParent = document.createElement("div");
const divChild = document.createElement("div");
divChild.id = "child";
divParent.id= "parent";
divParent.style.cssText = "display: flex; flex-direction: column; " +
"padding: 0px; margin: 0px; width: 100%; justify-content: space-around;";
divChild.style.cssText = "padding: 0px; margin: 0px; height: 100%";
let amountOfDivs = 16;

function appendChilds(amount){
    for (let index = 0; index < amount; index++) {       
        divParent.appendChild(divChild.cloneNode(true));        
        console.log("div inserted");
    }
}

function createGrid(amount){
    for (let index = 0; index < amount; index++) {
        divContainer.appendChild(divParent.cloneNode(true));        
    }
}

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
} 

appendChilds(amountOfDivs);
createGrid(amountOfDivs);

document.querySelector("div#child").addEventListener('mouseover', event => {
    event.target.style.backgroundColor = randomColor();
});