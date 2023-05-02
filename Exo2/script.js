const box = document.createElement("div")
box.classList.add("box")

const board = document.querySelector("#board")

let nb = 1

for(let i = 1; i <= 4; i++){
    const newbox = box.cloneNode()
    newbox.innerText = i
    board.appendChild(newbox)
}

const boxes = document.querySelectorAll('.box');

function animationRotate(event) {
    const box = event.target;
    box.classList.toggle('active'); //le toggle évite de faire du add / remove 
    box.classList.toggle('red');
}

boxes.forEach(box => {
    box.addEventListener('click', animationRotate);
});