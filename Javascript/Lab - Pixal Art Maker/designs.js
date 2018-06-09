// Declared Variables

let pixelCanvas = document.getElementById('pixelCanvas'),
    submitButton = document.getElementById('submitButton'),
    color,
    width,
    height;
    

// Select color input
    function grabColor(){
        color = document.querySelector('#colorPicker').value;
    }

// Select size input
    function grabWidthAndHeight(){
    height = document.querySelector("#inputHeight").value,
    width = document.querySelector("#inputWidth").value;
    }    

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    // Your code goes here!
    pixelCanvas.insertAdjacentHTML('afterbegin', '<div class="pixelContainerDiv"></div>');
  }

  submitButton.addEventListener('click', makeGrid);