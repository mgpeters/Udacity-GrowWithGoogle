// Declared Variables

let pixelCanvas = document.getElementById('pixelCanvas'),
    submitButton = document.getElementById('submitButton'),
    divCell = '<div class="divCell"></div>',
    br = '</br>',
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
    console.log(`WORKED! - Height: ${height} Width: ${width}`);
    }    

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    // Your code goes here!
    pixelCanvas.insertAdjacentHTML('afterbegin', '<div id="pixelContainerDiv"></div>');

    // Possibly not needed - let pixelContainerDiv = document.getElementById('pixelContainerDiv');

    grabWidthAndHeight();

    for (let i = 0; i < height; i += 1){
        for(let x = 0; x < width; x += 1){
            pixelCanvas.insertAdjacentHTML('afterbegin', divCell);
        }
        pixelCanvas.insertAdjacentHTML('beforeend', br);
    }
  }

  //submitButton.addEventListener('click', makeGrid);

  makeGrid();