var cells = document.querySelectorAll('.cell')
const resetButton = document.getElementById("resetButton");
const sideCount = document.getElementById('sideNumber');
const container = document.getElementById("container");

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
    var sideValue = parseInt(prompt("Input number (max 100)"));
    if (sideValue > 100){
        sideValue = parseInt(prompt("Input number (max 100)"));
    }
    for (let i = 0; i < (sideValue * sideValue); i++) {
        let newCell = document.createElement('div');
        newCell.className = "cell";
        newCell.addEventListener("mouseover",()=>{
            newCell.classList.add('hoverColor');
        });
        container.appendChild(newCell);
    }
    container.style.gridTemplateColumns = `repeat(${sideValue}, 1fr)`
    container.style.gridTemplateRows = `repeat(${sideValue}, 1fr)`
})