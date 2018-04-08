
$(document).ready(function(){
    var gridHeight, gridWidth, boxColor;

    function makeGrid() {
        $("#pixelCanvas").append("<div id='gridCell'></div>");
    }
    // Select color input
    $("#button").on('click', function(){
        gridHeight = $("#inputHeight").val();
        gridWidth = $("#inputWidth").val();

        alert("Height is :" + gridHeight + "\nWidth is :" + gridWidth);
        
        makeGrid();
    });
    // Select size input

    // When size is submitted by the user, call makeGrid()

});