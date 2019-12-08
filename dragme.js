'use strict'

// Choose Image

function clickButton() {
    let buttons = document.getElementsByClassName("button");
    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener(
            'click',
            function(){
                chooseImage(i);
            }
        )
    }
}

function chooseImage(i) {
    let imageSource = [
        'media/DragmeOne.jpg', 
        'media/DragmeTwo.jpg', 
        'media/DragmeThree.jpg',
    ]
    for (let j = 0; j <= imageSource.length; j++){
        if(i === j){
            let image = document.getElementById('container__cube__image');
            image.setAttribute("src", imageSource[j])
        }

    }
}

// Drag and Drop
function init() {
    let cubeImage = document.getElementById("container__cube__image");
    let square = document.getElementById("container__square");
    cubeImage.addEventListener(
        'dragstart',
        drag
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

function allowDrop(ev) {
    ev.preventDefault();
  }

function drop(ev) {
    // Drop
    ev.preventDefault();
    var data = ev.dataTransfer.getData("dataName");
    ev.target.appendChild(document.getElementById(data));

    // CSS Change 
    document.getElementById("container__cube__image").style.borderRadius = "unset";
  }


// call functions
init();
clickButton();