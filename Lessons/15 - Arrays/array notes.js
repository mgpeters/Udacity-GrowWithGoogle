var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";
​
var crew = [captain, second, pilot, companion, mercenary, mechanic];
​
function myAwesomeFunction(element, index, array){
    console.log("Element: " + element);
    console.log("Index: " + index);
    console.log("Array: " + array);
}
crew.forEach(myAwesomeFunction);