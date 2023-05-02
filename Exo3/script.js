let player = "X";

function afficherXO(event) {
const cell = event.target;

// Vérifier si la case n'a pas encore été cliquée
    if (!cell.classList.contains("clicked")) {
        // Afficher le joueur actuel ('X' ou 'O')
        cell.textContent = player;
        // Ajouter la classe "clicked" pour indiquer que la case a été touchée
        cell.classList.add("clicked");
        // Alterner entre 'X' et 'O' à chaque tour
        player = (player === "X") ? "O" : "X" ;
        // Mettre à jour le contenu de l'élément div pour afficher le message du tour du joueur
        const turnMessage = document.getElementById("turnMessage");
        turnMessage.textContent = "C'est au tour de " + player + " de jouer";
        // Vérifier si toutes les cases ont été cliquées
        const allClicked = Array.from(boxes).every(box => box.classList.contains("clicked"));
        if (allClicked) {
            document.querySelector("#turnMessage").textContent = "Partie terminée";
        }
    }
}




const box = document.createElement("div");
box.classList.add("box");

const board = document.querySelector("#board");


for(let i = 1; i <= 9; i++){
    const newbox = box.cloneNode()
    board.appendChild(newbox)
}


const boxes = document.querySelectorAll(".box");
boxes.forEach(box => box.addEventListener("click", afficherXO));