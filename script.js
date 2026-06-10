const container = document.getElementById("container");
const buttonNewGrid = document.getElementById("newgrid");



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

function addhovereffect(square) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    square.addEventListener('mouseover', () =>
        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    )
}

createGrid(16);