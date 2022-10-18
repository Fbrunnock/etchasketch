var cells = document.querySelectorAll('.cell')
const resetButton = document.getElementById("resetButton");
const sideCount = document.getElementById('sideNumber');
const container = document.getElementById("container");
var sideValue = document.getElementById('sidecount');

for (let item of cells) {
    item.addEventListener("mouseover", function(){
        item.classList.add('hoverColor');
    })
}

resetButton.addEventListener("click", function(){
    for (let item of cells){
        item.classList.remove('hoverColor');
    }
});

sideCount.addEventListener("mousedown",()=> {
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
})

sideCount.addEventListener("mouseup",()=> {
    for (let i = 0; i < (sideValue.value * sideValue.value); i++) {
        let newCell = document.createElement('div');
        newCell.className = "cell";
        newCell.addEventListener("mouseover",()=>{
            newCell.classList.add('hoverColor');
        });
        container.appendChild(newCell);
    }
    container.style.gridTemplateColumns = `repeat(${sideValue.value}, 1fr)`
    container.style.gridTemplateRows = `repeat(${sideValue.value}, 1fr)`
})