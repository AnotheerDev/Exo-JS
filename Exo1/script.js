function afficherInfoAlert(){
    alert("Class : carre\n" +
    "-Background color : osef\n" +
    "-Color : osef\n" +
    "-Height : osef\n" +
    "-Widht : osef\n" +
    "-Display : a ton avis ?\n" +
    '-Display : "Time New Roman (40px)"\n'
    );
}

const box = document.createElement("div")
box.classList.add("box")

const board = document.querySelector("#board")
board.appendChild(box)
box.innerText = " Bouah "

box.addEventListener("click" , afficherInfoAlert);
