// Objective: Fetch multiple URLs in parallel and process the data once all requests
// are completed

function fetchData(){
    console.log("JS is running");

    return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response=>{
if(!response.ok){
throw new Error("Something went wrong");;
}
    return response.json();
   }).then((data=>console.log(data[0].title))).catch(err=>console.error(err));
    
}
fetchData()