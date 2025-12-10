// Exercise: Return data in .then()

// Create a Promise that resolves with a number (e.g., 5).
// In .then(), multiply the number by 10 and log the result.
function MulpleBy(n) {
  return new Promise((resolve, reject) => {
    resolve(n);
  }).then((value) => {
    return value * 10;
  });
}
MulpleBy(4).then((result) => {
  console.log(result);
});
