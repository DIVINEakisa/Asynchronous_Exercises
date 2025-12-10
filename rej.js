// Exercise: Reject a Promise

// Create a Promise that rejects with "Something went wrong" and catch the error using .catch().

// Expected:

// Something went wrong
function rej() {
  return new Promise((resolve, reject) => {
    reject("Something Went Wrong");
  });
}
rej().catch((error) => {
  console.log(error);
});
