const cells = document.getElementsByClassName("cell");
const resetButton = document.getElementById("resetButton")

for (let item of cells) {
    item.addEventListener("mouseover", function(e){
        item.classList.add('hoverColor')
    })
}

resetButton.addEventListener("click", function(e){
    for (let item of cells){
        item.classList.remove('hoverColor')
    }
});

