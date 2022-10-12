var btn = document.querySelector("button");

function buttonColor(){
     btn.style.background = "pink";
}

function hoverColor(){
    btn.style.background = "purple";
}

btn.addEventListener('click',buttonColor);
btn.addEventListener('mouseover',hoverColor);

var img = document.querySelector("#kitten");

function newImage(){
    img.src="../ica8/img/kittenkisses.jpeg";
}

img.addEventListener('click', newImage);