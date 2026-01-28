// Write a JavaScript program to implement a function 
// that executes a given function repeatedly at a fixed interval using 'setInterval()'.
function repeatFunctionAtInterval(interval) {
    return setInterval(()=>{
        console.log("Function executed at interval of " + interval + " milliseconds");
    }, interval);
}   
const intervalId = repeatFunctionAtInterval(2000);

// To stop the interval after some time (for example, after 10 seconds)     
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval cleared");
}, 10000);
