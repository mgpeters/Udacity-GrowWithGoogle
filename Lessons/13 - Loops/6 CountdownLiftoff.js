/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here
var countDown = 60;

while (countDown >= 0){
    if(countDown === 50){
        console.log("Orbiter transfers from ground to internal power");
    }else if(countDown === 31){
        console.log("Ground launch sequencer is go for auto sequence start");
    }else if(countDown === 16){
        console.log("Activate launch pad sound suppression system");
    }else if(countDown === 10){
        console.log("Activate main engine hydrogen burnoff system");
    }else if(countDown === 6){
        console.log("Main engine start");
    }else if(countDown === 0){
        console.log("Solid rocket booster ignition and liftoff!");
    }else{
        console.log("T-" + countDown + " seconds");
    }
    countDown -= 1;
}