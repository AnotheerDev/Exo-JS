// Récupère l'élément "board" du DOM dans une variable
const board = document.getElementById("board");
// Initialise un compteur à 0 pour compter le nombre de carrés créés
let count = 0;

// Fonction pour générer une couleur aléatoire
function generateRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

//Fonction pour changer la couleur en noir
function colorBlack(event) {
  const square = event.target;
  square.style.backgroundColor = "black";
}

// Ajoute un écouteur d'événements pour les touches du clavier
document.addEventListener("keydown", event => {
  // Vérifie que la touche appuyée est la flèche du haut et qu'on n'a pas encore créé 225 carrés
  if (event.key === "ArrowUp" && count < 225) {
    // Crée un élément "div" pour représenter le carré
    const square = document.createElement("div");
    // Ajoute la classe CSS "square" au carré
    square.classList.add("square");
    // Applique une couleur aléatoire au carré en utilisant la fonction generateRandomColor()
    square.style.backgroundColor = generateRandomColor();
    // Applique une couleur noir au carré au clique en utilisant la fonction colorBlack()
    square.addEventListener("click", colorBlack);
    // Ajoute le carré à l'élément "board"
    board.appendChild(square);
    // Incrémente le compteur de carrés créés
    count++;
  }
});

document.addEventListener("clicked", colorBlack)

