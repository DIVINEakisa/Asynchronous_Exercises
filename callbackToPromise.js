// Given the following callback-based JavaScript function, convert it into a Promise-based function.
function getUserData(callback) {
    setTimeout(() => {
        let user = { id: 1, username: "Bret" };
        callback(null, user);   // success
    }, 1000);
}
// Task

//  Rewrite the above function using Promises instead of callbacks.
function getUserData(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            let user ={id:1,username:"Bret"}
            resolve(user);
            reject("Something get wrong")
        },1000);
    }).then(mess=>console.log(mess)).catch(err=>console.error(err));
}
getUserData();