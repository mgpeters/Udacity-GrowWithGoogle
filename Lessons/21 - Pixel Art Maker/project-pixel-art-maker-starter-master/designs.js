
$(document).ready(function(){
    var gridHeight, gridWidth, boxColor,
        cell = "<div id='gridCell'></div>";

    function makeGrid() {
        
        for(let x = 0; x < gridWidth; x += 1){
            $(".pixelCanvas").append(cell);
        }
    }

    $("#button").on('click', function(){
        gridHeight = $("#inputHeight").val();
        gridWidth = $("#inputWidth").val();  
        makeGrid();
    });

});

/*$("#gridCell").on('click', function(){
    $("#gridCell").html("<div id='gridCell' style='background-color: black'></div>");
})*/