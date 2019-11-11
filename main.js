let root= document.querySelector("div");

let h1= document.createElement("h1");
h1.innerText="Daily Challenge 12";
root.appendChild(h1);

let masterB= document.createElement("button");
masterB.innerText="Start";
masterB.setAttribute("id","master");
root.appendChild(masterB);


// let sound= document.createElement("audio");
// sound.setAttribute("id" "fatality");
let mySound= document.getElementById("fatality");





h1.addEventListener("click", grow);

function grow(){
	h1.classList.add("grow");

}

masterB.addEventListener("click", turnAround);

function turnAround(){


	masterB.classList.toggle("rotation");

}



masterB.addEventListener("mouseover", changeImg);

function changeImg(){
	masterB.classList.toggle("swapImg");
}

// masterB.addEventListener("mouseover", hover);

// function hover(){
// 	masterB.classList.add("bringClose");
// }

masterB.addEventListener("click", swapColor);

function swapColor(){
	masterB.classList.add("style3");

}

masterB.addEventListener("click", playMusic);

function playMusic(){
	mySound.play();
}