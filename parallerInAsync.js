// Objective: Fetch multiple URLs in parallel and process the data once all requests
// are completed

// async function fetchData(){

//     let ft = await fetch("https://jsonplaceholder.typicode.com/posts");
// if(!ft.ok){
//     throw new Error("There's Problem");
// }
// return ft.json()

// }
// fetchData().then(data=>console.log(data[0].body)).catch(err=>console.error(err));

async function parallerPromise() {
    let urls = ["https://jsonplaceholder.typicode.com/posts/1","https://jsonplaceholder.typicode.com/posts/2","https://jsonplaceholder.typicode.com/posts/3","https://jsonplaceholder.typicode.com/posts/4"];
    let promise = urls.map(url=>fetch(url).then(response=>response.json()).catch(err=>console.error(err)));
    let data = await Promise.all(promise);
    return data

}
parallerPromise().then(mess=>console.log(mess)).catch(err=>console.log(err));