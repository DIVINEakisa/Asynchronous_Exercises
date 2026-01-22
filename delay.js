// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.
function TakeCallback(cbk){
    return setTimeout(()=>{
       cbk();
    },2000);

}
TakeCallback(()=>{
 console.log("this is a call back function invoked after 2 sec");
});