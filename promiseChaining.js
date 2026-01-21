// Write a JavaScript function that uses a chain of .then() calls to perform a series of asynchronous tasks.
function promiseChaining(){
    return fetch ("https://jsonplaceholder.typicode.com/users/1")
    .then(resp=>resp.json())
    .then(user=>{
        console.log("id" + user.id)
        return user;
    }
    )
    .then(user=>
    {
        console.log("username"  +  user.username)
        return user
    }
    )
    .catch(err=>console.error(err));
}
promiseChaining();
