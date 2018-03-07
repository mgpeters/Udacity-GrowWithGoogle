/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(input){
    var result = "",
        x = 0;
        
    while(x < input){
        result += "ha";
        x += 1;
    }
    result += "!";
    
    return result;
}

console.log(laugh(10));
