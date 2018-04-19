
$(document).ready(function(){
    var gridHeight, gridWidth, boxColor;

    function makeGrid() {
        $(".pixelCanvas").append("<div id='gridCell'></div>");
       
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