'use strict'

// Choose Image

function clickButton() {
    let buttons = document.getElementsByClassName("button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener(
            'click',
            function () {
                chooseImage(i);
            }
        )
    }
}

function chooseImage(i) {
    let imageSource = [
        'url(media/DragmeOne.jpg)',
        'url(media/DragmeTwo.jpg)',
        'url(media/DragmeThree.jpg)',

    ]
    for (let j = 0; j <= imageSource.length; j++) {
        if (i === j) {
            let image = document.getElementById('container__cube');
            image.style.backgroundImage =  imageSource[j];
        }

    }
}

// Drag and Drop
let cubeImage = document.getElementById("container__cube");
let square = document.getElementById("container__square");
let placeholder = document.getElementById("container__placeholder");

function init() {
    cubeImage.addEventListener(
        'dragstart',
        drag
    )
    cubeImage.addEventListener(
        'touchstart',
        mobiledrag
    )
    square.addEventListener(
        'drop',
        drop
    )
    square.addEventListener(
        'dragover',
        allowDrop
    )
};
function drag(ev) {
    ev.dataTransfer.setData("dataName", ev.target.id);    
}
function mobiledrag(){
    square.appendChild(cubeImage);

    // CSS Changes
    cubeImage.style.borderRadius = "unset";
    cubeImage.style.border = "none";
    cubeImage.style.animation = "fullsize 2s forwards";
    square.style.animation = "fullsize 2s forwards";
    placeholder.style.position = "relative";
}

function allowDrop(ev) {
    ev.preventDefault();
}
function drop(ev) {
    // Drop
    ev.preventDefault();
    var data = ev.dataTransfer.getData("dataName");
    ev.target.appendChild(document.getElementById(data));

    // CSS Change 
    cubeImage.style.borderRadius = "unset";
    cubeImage.style.border = "none";
    cubeImage.style.animation = "fullsize 2s forwards";
    square.style.animation = "fullsize 2s forwards";
    placeholder.style.position = "relative"
}



// call functions
init();
clickButton();