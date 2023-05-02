function afficherInfoAlert(){
    var element = document.getElementById("box");
    var style = window.getComputedStyle(box);
    var width = style.getPropertyValue("width");
    var height = style.getPropertyValue("height");
    var display = style.getPropertyValue("display");
    var color = style.getPropertyValue("color");
    alert( "width : " + width + "\n" + "height : " + height + "\n" + "display : " + display + "\n" + "color : " + color + "\n");

  }

const box = document.createElement("div")
box.classList.add("box")

const board = document.querySelector("#board")
board.appendChild(box)
box.innerText = " Bouah "

box.addEventListener("click" , afficherInfoAlert);