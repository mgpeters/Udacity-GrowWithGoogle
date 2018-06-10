// Declared Variables

const   pixelCanvas = document.getElementById('pixelCanvas'), //Grabs the table
        submitButton = document.getElementById('submitButton');

let color,
    width,
    height;
    

// Select color input
function grabColor(){
    color = document.querySelector('#colorPicker').value;
}

// Function to fill cells with selected color

function colorFill(){
    this.setAttribute('style', `background-color: ${color}`);
}

// Select size input
function grabWidthAndHeight(){
    height = document.querySelector("#inputHeight").value,
    width = document.querySelector("#inputWidth").value;
    console.log(`WORKED! - Height: ${height} Width: ${width}`);
}    

//Clears grid

function clearGrid(){
    while(pixelCanvas.firstChild){
        pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
}

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    // Your code goes here!
    clearGrid();
    grabColor();
    grabWidthAndHeight();

    for (let i = 0; i < height; i += 1){
            //Creates Height
        let row = pixelCanvas.insertRow(i);

        for(let x = 0; x < width; x += 1){
            //Creates Width;
          let cell = row.insertCell(x);
          cell.addEventListener('click', colorFill);
        }
    }
    event.preventDefault();
  }

  //submitButton.addEventListener('click', makeGrid);

  submitButton.addEventListener('click', makeGrid);