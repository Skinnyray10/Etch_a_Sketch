const container = document.getElementById("container");
const buttonNewGrid = document.getElementById("newgrid");



function createGrid(size) {
    container.innerHTML = ""
    for (let i = 0; i < size * size; i++) {

        const square = document.createElement("div")
        square.classList.add("square")
        container.appendChild(square)
        square.addEventListener('mouseover', () =>
            square.style.backgroundColor = "red"
        )
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


