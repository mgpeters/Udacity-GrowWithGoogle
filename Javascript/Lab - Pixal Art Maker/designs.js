
$(document).ready(function(){
    var gridHeight, gridWidth, boxColor,
        cell = "<div id='gridCell'></div>";

    function makeGrid() {
        for(let x = 0; x < gridWidth; x += 1){
            for(let y = 0; y < gridHeight; y += 1){
                $(".pixelCanvas").append(cell);
            }
        }
        $(".pixelCanvas").width(960 / gridWidth);
        $(".pixelCanvas").height(960 / gridHeight);
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