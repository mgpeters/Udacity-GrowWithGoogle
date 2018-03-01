/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

// your code goes here
if((shirtWidth <= 19) && (shirtLength <= 28) && (shirtSleeve <= 8.37)){
	console.log("S");
} else if(((shirtWidth === 20) || (shirtWidth === 21)) && (shirtLength === 29) && (shirtSleeve >= 8.38) && (shirtSleeve <= 8.62)){
	console.log("M");
} else if(((shirtWidth === 22) || (shirtWidth === 23)) && (shirtLength === 30) && (shirtSleeve >= 8.63) && (shirtSleeve <= 8.87)){
	console.log("L");
} else if(((shirtWidth === 24) || (shirtWidth === 25)) && ((shirtLength === 31) || (shirtLength === 32))  && (shirtSleeve >= 8.88) && (shirtSleeve <= 9.62)){
	console.log("XL");
} else if(((shirtWidth === 26) || (shirtWidth === 27)) && (shirtLength === 33) && (shirtSleeve >= 9.63) && (shirtSleeve <= 10.12)){
	console.log("2XL");
} else if(((shirtWidth === 28) || (shirtWidth = 29)) && (shirtLength === 34) && (shirtSleeve >= 9.63) && (shirtSleeve <= 10.12)){
	console.log("3XL");
}else{
	console.log("N/A");
}