// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.
function getData(){
   return fetch("https://jsonplaceholder.typicode.com/posts").then(resp=>resp.json()).catch(err=>console.log(err));

}
getData().then(data=>console.log(data)).catch(err=>console.log(err));