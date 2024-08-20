const divContainer = document.querySelector("div#divContainer");
let amountOfDivs = 16;

function createGrid(amount){
    for (let index = 0; index < amount; index++) {
        let divParent = document.createElement("div");
        divParent.id = "parent";
        divParent.classList.add ("parent");
        divParent.style.cssText = "display: flex; flex-direction: column; " +
        "padding: 0px; margin: 0px; width: 100%; justify-content: space-around;";        
        for (let index = 0; index < amount; index++) {         
            let divChild = document.createElement("div");
            divChild.classList.add ("child");
            divChild.id = 'child#'+(index+1); 
            divChild.style.cssText = "padding: 0px; margin: 0px; height: 100%";     
            divChild.addEventListener("mouseover", event =>{
                event.target.style.background = randomColor();
            })
            divParent.appendChild(divChild);                    
            console.log("div inserted");
        }
        divContainer.appendChild(divParent);
    }    
}

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}

function newGrid(){    
    divContainer.innerHTML='';
}

createGrid(amountOfDivs);

const btnSize = document.querySelector("button");

btnSize.addEventListener("click", event =>{
    let newAmount = prompt("Insert a new size to the grid: ");
    if(Number.isInteger(newAmount*1)){
        while (newAmount > 100 || newAmount <= 0) {
            while (newAmount > 100){
                newAmount = prompt("The max size of the grid is 100. " + 
                    "Please enter a new size for the grid.");
            }
            while (newAmount <= 0){
                newAmount = prompt("The min size of the grid is 1. " + 
                    "Please enter a new size for the grid.");
            }
        }        
        newGrid();
        createGrid(newAmount);
        
    }

})
