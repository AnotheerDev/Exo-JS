//Récupération de l'élément input qui permet à l'utilisateur d'entrer une valeur en euros
const conversionInput = document.getElementById("conversion");

//Création d'un élément paragraphe qui sera utilisé pour afficher le résultat de la conversion
const resultElement = document.createElement("p");

//Fonction convert qui sera appelée à chaque saisit d'une valeur dans l'input
const convert = () => {
//Récupération de la valeur en euros 
const euros = conversionInput.value;
//Calcul de la conversion en francs français, en utilisant un taux de change fixe
const francs = euros * 6.5597;150
//Mise à jour du texte de l'élément paragraphe pour afficher le résultat de la conversion
resultElement.textContent = `${euros} euros = ${francs.toFixed(2)} francs`;
};

conversionInput.addEventListener("input", convert);
document.getElementById("convertisseur").appendChild(resultElement);
