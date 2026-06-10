const container = document.getElementById("container");
const buttonNewGrid = document.getElementById("newgrid");
const colorpicker = document.getElementById("colorPicker")
let currentColor = colorpicker.value


function createGrid(size) {
    container.innerHTML = ""
    const squaresize = 960 / size;
    for (let i = 0; i < size * size; i++) {

        const square = document.createElement("div")
        square.style.width = `${squaresize}px`
        square.style.height = `${squaresize}px`
        square.classList.add("square")
        container.appendChild(square)
        addhovereffect(square)

    }

}
buttonNewGrid.addEventListener("click", () => {
    let size = prompt("Tell us the size of the grid");

    let numero = parseInt(size, 10)

    if (isNaN(numero)) {
        numero = 16
    }
    else if (numero > 100) {
        numero = 100
    }
    createGrid(numero);
});


colorpicker.addEventListener("input", () => {
    currentColor = colorpicker.value;
});
function addhovereffect(square) {
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = currentColor;
    });
}

createGrid(16);